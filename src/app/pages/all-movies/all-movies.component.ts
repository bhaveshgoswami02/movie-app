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
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  latestMovies:any = []
  mostRatedMovie:any = []
  UpcommingMovies:any = []
  popularMovies:any = []
  imgUrl:string = environment.imgUrl
  allData:any = []
  page:number = 1
  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.getLatestMovies()
    this.getMostRatedMovie()
    this.getUpcommingMovies()
    this.getPopularMovie()
  }

  getLatestMovies() {
    this.apiService.getLatestMovies().subscribe(res=>{
      this.latestMovies = res
      console.log("Latest Movies",this.latestMovies)
    })
  }

  getMostRatedMovie() {
    this.apiService.getMostRatedMovie(this.page).subscribe(res=>{
      this.mostRatedMovie = res
      console.log("Most Rated Movie",this.mostRatedMovie)
    })
  }

  getUpcommingMovies() {
    this.apiService.getUpcommingMovies(this.page).subscribe(res=>{
      this.UpcommingMovies = res
      console.log("UpcommingMovies",this.UpcommingMovies)
    })
  }

  getPopularMovie() {
    this.apiService.getPopularMovie(this.page).subscribe(res=>{
      this.popularMovies = res
      console.log("popularMovies",this.UpcommingMovies)
    })
  }

}
