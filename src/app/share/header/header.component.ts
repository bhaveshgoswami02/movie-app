import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language = localStorage.getItem("language")
  toggleButton:boolean = false
  searchBar:boolean = false
  // @ViewChild('toggler') toggler:ElementRef
  // @Input() isBack: string;
  constructor(public common:CommonService,public route:ActivatedRoute,public router:Router) {
    
  }

  ngOnInit(): void {
    
  }

  toggle(){
    console.log("toggle")
    // this.toggler.nativeElement.click()
  }

  back(){
    this.common.goBack()
  }

  search(form:any){
    // console.log(form)
    // if(form.keyword){
    //   this.router.navigateByUrl("/home/"+form.keyword)
    // }
  }

}
