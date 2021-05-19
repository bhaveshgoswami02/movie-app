import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade, Autoplay, A11y]);

@Component({
  selector: 'app-all-tv',
  templateUrl: './all-tv.component.html',
  styleUrls: ['./all-tv.component.scss']
})
export class AllTvComponent implements OnInit {
  latestTv:any = []
  mostRatedTv:any = []
  popularTv:any = []
  imgUrl:string = environment.imgUrl
  allData:any = []

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.getLatestTv()
    this.getMostRatedTv()
    this.getPopularTv()
  }

  
  getLatestTv() {
    this.apiService.getLatestTv().subscribe(res=>{
      this.latestTv = res
      console.log("latest tv",this.latestTv)
    })
  }

  getMostRatedTv() {
    this.apiService.getMostRatedTv().subscribe(res=>{
      this.mostRatedTv = res
      console.log("Most Rated TV",this.mostRatedTv)
    })
  }
  
  getPopularTv() {
    this.apiService.getPopularTv().subscribe(res=>{
      this.popularTv = res
      console.log("popularTv",this.popularTv)
    })
  }
}
