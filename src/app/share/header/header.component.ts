import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  @ViewChild('toggler') toggler:ElementRef | undefined

  @Input() isHome: string = "";
  constructor(public common:CommonService,public route:ActivatedRoute,public router:Router,public authService:AuthService) { }

  ngOnInit(): void {
    this.toggle()
  }

  back(){
    this.common.goBack()
  }

  toggle(){
    console.log("toggle")
    if(this.toggler){
      this.toggler.nativeElement.click()
    }
  }

  logout() {
    this.authService.logout()
    this.toggle()
  }

  routing(route:string) {
    this.router.navigateByUrl("/"+route)
    this.toggle()
  }

}
