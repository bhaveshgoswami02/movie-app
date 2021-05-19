import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(event:any) {
    // let path = "/products"
    if(event.key == "Enter") {
      let keyWords = event.target.value.toLocaleLowerCase( )
      // this._themeService.navigateTo(path,{key:keyWords})
    }
  }

  blankSearchField(searchText:any) {
    searchText.value = null
  }

}
