import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id:any = ""
  data:any = {}
  imgUrl:string = environment.imgUrl
  mediaType:any = ""
  videoThumbmailFront:any = environment.videoThumbmailFront
  videoThumbmailBack:any = environment.videoThumbmailBack
  videos:any = []
  similarData:any = []
  episodeGroups:any = []

  constructor(public api:ApiService,public route:ActivatedRoute,public domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.mediaType = this.route.snapshot.paramMap.get("mediaType")
    console.log("id",this.id)
    console.log("media type",this.mediaType)
    if (this.mediaType == "mostRatedMovie" || this.mediaType == "movie") {
      this.getMovieData()
      this.getMoviesVideo()
      this.getSimilarMovie()
    } else if (this.mediaType == "mostReatedTv" || this.mediaType =="tv") {
      this.getTvData()
      this.getTvVideo()
      this.getSimilarTv()
      this.getEpisodeGroups()
    }
  }

  getMovieData() {
    this.api.getMovieDetail(this.id).subscribe(res=>{
      this.data = res
      console.log("single data",this.data)
    })
  }

  getTvData() {
    this.api.getTvDetail(this.id).subscribe(res=>{
      this.data = res
      console.log("single data",this.data)
    })
  }

  getMoviesVideo() {
    this.api.getMovieVideo(this.id).subscribe(res=>{
      this.videos = res
      console.log("movies videos",this.videos)
    })
  }

  getTvVideo() {
    this.api.getTvVideo(this.id).subscribe(res=>{
      this.videos = res
      console.log("tv videos",this.videos)
    })
  }

  getSimilarMovie() {
    this.api.getSimilarMovies(this.id).subscribe((res:any)=>{
      this.similarData = res.results
      console.log("similar movie",this.similarData)
    })
  }
  
  getSimilarTv() {
    this.api.getSimilarTv(this.id).subscribe((res:any)=>{
      this.similarData = res.results
      console.log("similar tv",this.similarData)
    })
  }

  getEpisodeGroups() {
    this.api.getEpisodeGroups(this.id).subscribe(res=>{
      this.episodeGroups = res
      console.log("episodeGroups",this.episodeGroups)
    })
  }
}
