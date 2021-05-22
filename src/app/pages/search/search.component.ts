import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  skeleton:boolean = false
  allData:any = []
  imgUrl = environment.imgUrl

  constructor(public api:ApiService,public router:Router,public authService:AuthService) { }

  ngOnInit(): void {
  }

  search(event:any) {
    this.skeleton = true
    // let path = "/products"
    if(event.target.value == '') {
      this.allData = []
      this.skeleton = false
    }
    let keyWords = event.target.value.toLocaleLowerCase( )
    this.api.search(keyWords).subscribe(res=>{
      console.log("search result",res)
      this.allData = res
      this.skeleton = false
    })
    if(event.key == "Enter") {
      // this._themeService.navigateTo(path,{key:keyWords})
    }
  }

  blankSearchField(searchText:any) {
    searchText.value = null
    this.allData = []
  }

  routing(route:string) {
    this.router.navigateByUrl("/"+route)
  }

  logout() {
    this.authService.logout()
  }

}
