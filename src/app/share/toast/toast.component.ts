import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() title:string =""

  constructor() {
    console.log("taost data",this.title)
   }

  ngOnInit(): void {
  }

}
