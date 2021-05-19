import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-medias',
  templateUrl: './all-medias.component.html',
  styleUrls: ['./all-medias.component.scss']
})
export class AllMediasComponent implements OnInit {
  mediaType: any = ""
  allData: any = []
  imgUrl:string = environment.imgUrl
  id:any = ""
  moreLikeType:any = ""
  constructor(public route: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.moreLikeType = this.route.snapshot.paramMap.get("moreLikeType")
    this.mediaType = this.route.snapshot.paramMap.get("mediaType")
    if (this.mediaType == "trending") {
      this.getTrending()
    } else if (this.mediaType == "mostRatedMovie") {
      this.getMostRatedMovie()
    } else if (this.mediaType == "mostReatedTv") {
      this.getMostRatedTv()
    } else if (this.mediaType == "upcommingMovies") {
      this.getUpcommingMovies()
    } else if (this.mediaType == "popularMovies") {
      this.getPopularMovie()
    } else if (this.mediaType == "popularTv") {
      this.getPopularTv()
    } else if (this.mediaType == "moreLikeThis") {
      if(this.moreLikeType == "movie") {
        this.getSimilarMovie()
      }
      else
      {
        this.getSimilarTv()
      }
    }
  }

  getMostRatedMovie() {
    this.apiService.getMostRatedMovie().subscribe(res => {
      this.allData = res
      console.log("Most Rated Movie", this.allData)
    })
  }

  getMostRatedTv() {
    this.apiService.getMostRatedTv().subscribe(res => {
      this.allData = res
      console.log("Most Rated TV", this.allData)
    })
  }

  getTrending() {
    this.apiService.getTrending().subscribe(res => {
      this.allData = res
      console.log("allData", this.allData)
    })
  }

  getUpcommingMovies() {
    this.apiService.getUpcommingMovies().subscribe(res=>{
      this.allData = res
      console.log("UpcommingMovies",this.allData)
    })
  }

  getPopularMovie() {
    this.apiService.getPopularMovie().subscribe(res=>{
      this.allData = res
      console.log("popularMovies",this.allData)
    })
  }

  getPopularTv() {
    this.apiService.getPopularTv().subscribe(res=>{
      this.allData = res
      console.log("popularTv",this.allData)
    })
  }

  getSimilarMovie() {
    this.apiService.getSimilarMovies(this.id).subscribe((res:any)=>{
      this.allData = res
      console.log("similar movie",this.allData)
    })
  }
  
  getSimilarTv() {
    this.apiService.getSimilarTv(this.id).subscribe((res:any)=>{
      this.allData = res
      console.log("similar tv",this.allData)
    })
  }
}
