import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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

  constructor(public api:ApiService) { }

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

}
