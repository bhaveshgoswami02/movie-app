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
  imgUrl: string = environment.imgUrl
  id: any = ""
  moreLikeType: any = ""
  isCalled: boolean = false
  page:number = 1
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
      if (this.moreLikeType == "movie") {
        this.getSimilarMovie()
      }
      else {
        this.getSimilarTv()
      }
    }
  }

  getMostRatedMovie() {
    this.apiService.getMostRatedMovie(this.page).subscribe((res:any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("Most Rated Movie", this.allData)
    })
  }

  getMostRatedTv() {
    this.apiService.getMostRatedTv(this.page).subscribe((res:any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("Most Rated TV", this.allData)
    })
  }

  getTrending() {
    this.apiService.getTrending(this.page).subscribe((res:any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("allData", this.allData)
    })
  }

  getUpcommingMovies() {
    this.apiService.getUpcommingMovies(this.page).subscribe((res:any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("UpcommingMovies", this.allData)
    })
  }

  getPopularMovie() {
    this.apiService.getPopularMovie(this.page).subscribe((res:any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("popularMovies", this.allData)
    })
  }

  getPopularTv() {
    this.apiService.getPopularTv(this.page).subscribe((res:any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("popularTv", this.allData)
    })
  }

  getSimilarMovie() {
    this.apiService.getSimilarMovies(this.id,this.page).subscribe((res: any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("similar movie", this.allData)
    })
  }

  getSimilarTv() {
    this.apiService.getSimilarTv(this.id,this.page).subscribe((res: any) => {
      if(this.allData.length==0) {
        this.allData = res.results
      }
      else
      {
        res.results.forEach((element:any) => {
          this.allData.push(element)
        });
      }
      console.log("similar tv", this.allData)
    })
  }

  onScroll() {
    if (!this.isCalled) {
      console.log('scrolled!!');
      this.isCalled = true
      setTimeout(() => {
        this.isCalled = false
      }, 1000);
      this.page = this.page + 1
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
        if (this.moreLikeType == "movie") {
          this.getSimilarMovie()
        }
        else {
          this.getSimilarTv()
        }
      }
      // this.listing.getNextListing().subscribe(res => {
      //   res.forEach(listData => {
      //     this.allListingList.push(listData)
      //   })
      //   console.log("next listing", this.allListingList)
      // })

    }

  }

}
