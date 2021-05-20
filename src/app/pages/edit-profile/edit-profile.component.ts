import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  data:any = {}

  constructor(public auth:AuthService,public common:CommonService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.auth.getUserDataFromDb(this.auth.getUid()).subscribe(res=>{
      this.data = res
      console.log("customer data",this.data)
    })
  }

  onSubmit(data:NgForm) {
    this.common.startLoader()
    this.auth.updateUser(this.auth.getUid(),data.value).then((res:any)=>{
      localStorage.setItem("customer", JSON.stringify(data.value))
      this.common.showToast("Profile Updated Successful!")
    }).catch(err=>{
      this.common.showToast(err)
    }).finally(()=>{
      this.common.stopLoader()
    })
  }

}
