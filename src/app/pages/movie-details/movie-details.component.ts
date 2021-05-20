import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id: any = ""
  data: any = {}
  imgUrl: string = environment.imgUrl
  mediaType: any = ""
  videoThumbmailFront: any = environment.videoThumbmailFront
  videoThumbmailBack: any = environment.videoThumbmailBack
  videos: any = []
  similarData: any = []
  episodeGroups: any = []
  youTubeLink: any = ""
  providers: any = []

  constructor(public api: ApiService, public route: ActivatedRoute, public domSanitizer: DomSanitizer, public router: Router) { }

  ngOnInit(): void {
    this.getData("", "")
  }

  getData(id: string, mediaType: string) {
    if (id && mediaType) {
      this.router.navigateByUrl("/detail/" + mediaType + "/" + id)
      setTimeout(() => {
        this.getData("", "")
      }, 500);
    }
    else {
      this.id = this.route.snapshot.paramMap.get("id")
      this.mediaType = this.route.snapshot.paramMap.get("mediaType")
      console.log("id", this.id)
      console.log("media type", this.mediaType)
      if (this.mediaType == "mostRatedMovie" || this.mediaType == "movie") {
        this.getMovieData()
        this.getMoviesVideo()
        this.getSimilarMovie()
        this.getMovieProviders()
      } else if (this.mediaType == "mostReatedTv" || this.mediaType == "tv") {
        this.getTvData()
        this.getTvVideo()
        this.getSimilarTv()
        this.getEpisodeGroups()
        this.getTvProviders()
      }
    }
  }

  getMovieData() {
    this.api.getMovieDetail(this.id).subscribe(res => {
      this.data = res
      console.log("single data", this.data)
    })
  }

  getTvData() {
    this.api.getTvDetail(this.id).subscribe(res => {
      this.data = res
      console.log("single data", this.data)
    })
  }

  getMoviesVideo() {
    this.api.getMovieVideo(this.id).subscribe(res => {
      this.videos = res
      console.log("movies videos", this.videos)
    })
  }

  getTvVideo() {
    this.api.getTvVideo(this.id).subscribe(res => {
      this.videos = res
      console.log("tv videos", this.videos)
    })
  }

  getSimilarMovie() {
    this.api.getSimilarMovies(this.id).subscribe((res: any) => {
      this.similarData = res.results
      console.log("similar movie", this.similarData)
    })
  }

  getSimilarTv() {
    this.api.getSimilarTv(this.id).subscribe((res: any) => {
      this.similarData = res.results
      console.log("similar tv", this.similarData)
    })
  }

  getEpisodeGroups() {
    this.api.getEpisodeGroups(this.id).subscribe(res => {
      this.episodeGroups = res
      console.log("episodeGroups", this.episodeGroups)
    })
  }

  openModal(key: string) {
    let tempLink = "https://www.youtube.com/embed/" + key
    console.log("templink", tempLink)
    this.youTubeLink = this.domSanitizer.bypassSecurityTrustResourceUrl(tempLink)
    console.log("youtubelink", this.youTubeLink)
  }

  getMovieProviders() {
    this.api.getMovieProviders(this.id).subscribe((res:any) => {
      this.providers = res.results.GB
      console.log("movie providers",this.providers)
    })
  }

  getTvProviders() {
    this.api.getTvProviders(this.id).subscribe((res:any) => {
      this.providers = res.results.GB
      console.log("tv providers",res)
      console.log("tv providers",this.providers)
    })
  }

}
