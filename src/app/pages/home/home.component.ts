import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestMovies: any = []
  mostRatedMovie: any = []
  UpcommingMovies: any = []
  popularMovies: any = []
  latestTv: any = []
  mostRatedTv: any = []
  trending: any = []
  popularTv: any = []
  imgUrl: string = environment.imgUrl
  allData: any = []
  page: number = 1
  nowPlayingMovies: any = []

  constructor(public apiService: ApiService,public authService:AuthService) {
    
  }

  ngOnInit(): void {
    this.getLatestMovies()
    this.getMostRatedMovie()
    this.getLatestTv()
    this.getMostRatedTv()
    this.getTrending()
    this.getUpcommingMovies()
    this.getPopularMovie()
    this.getPopularTv()
    this.getnowPlayingMovies()
  }

  getLatestMovies() {
    this.apiService.getLatestMovies().subscribe(res => {
      this.latestMovies = res
      console.log("Latest Movies", this.latestMovies)
    })
  }

  getMostRatedMovie() {
    this.apiService.getMostRatedMovie(this.page).subscribe(res => {
      this.mostRatedMovie = res
      console.log("Most Rated Movie", this.mostRatedMovie)
    })
  }

  getLatestTv() {
    this.apiService.getLatestTv().subscribe(res => {
      this.latestTv = res
      console.log("latest tv", this.latestTv)
    })
  }

  getMostRatedTv() {
    this.apiService.getMostRatedTv(this.page).subscribe(res => {
      this.mostRatedTv = res
      console.log("Most Rated TV", this.mostRatedTv)
    })
  }

  getTrending() {
    this.apiService.getTrending(this.page).subscribe(res => {
      this.trending = res
      console.log("trending", this.trending)
    })
  }

  getUpcommingMovies() {
    this.apiService.getUpcommingMovies(this.page).subscribe(res => {
      this.UpcommingMovies = res
      console.log("UpcommingMovies", this.UpcommingMovies)
    })
  }

  getPopularMovie() {
    this.apiService.getPopularMovie(this.page).subscribe(res => {
      this.popularMovies = res
      console.log("popularMovies", this.UpcommingMovies)
    })
  }

  getPopularTv() {
    this.apiService.getPopularTv(this.page).subscribe(res => {
      this.popularTv = res
      console.log("popularTv", this.popularTv)
    })
  }

  getnowPlayingMovies() {
    this.apiService.getNowPlaying(this.page).subscribe((res: any) => {
      this.nowPlayingMovies = res.results;
    });
  }
}
