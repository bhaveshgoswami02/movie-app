import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loader:boolean = false
  toastTitle:string = ""

  constructor() {
  }

  goBack() {
    window.history.back()
  }

  startLoader() {
    this.loader = true
  }

  stopLoader() {
    this.loader = false
  }

  showToast(title:any) {
    this.toastTitle = title
    console.log(this.toastTitle)
    setTimeout(() => {
      this.toastTitle = ""
      console.log("toast title timeout",this.toastTitle)
    }, 3000);
  }
}
