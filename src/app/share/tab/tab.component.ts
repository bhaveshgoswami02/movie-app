import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  routing(route:string) {
    this.router.navigateByUrl("/"+route)
  }
}
