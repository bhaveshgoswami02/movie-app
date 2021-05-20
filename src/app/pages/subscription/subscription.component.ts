import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  subscription:any = []
  
  constructor(public auth:AuthService,public common:CommonService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.auth.getUserDataFromDb(this.auth.getUid()).subscribe((res:any)=>{
      this.subscription = res.subscription
      if(!this.subscription) {
        this.subscription = []
      }
      console.log(this.subscription)
    })
  }

  onSubmit() {
    this.common.startLoader()
    this.auth.updateUser(this.auth.getUid(),{subscription:this.subscription}).then(res=>{
      this.common.showToast("Congratulations for unlimited entertainment!")
    }).catch(err=>{
      this.common.showToast(err)
    }).finally(()=>{
      this.common.stopLoader()
    })
  } 

  selectSubscription(plan:string) {
    if(this.subscription.length==0) {
      this.subscription.push(plan)
    }
    else
    {
      if(this.subscription.findIndex((e:any)=>e == plan) === -1) {
        this.subscription.push(plan)
      }
      else
      {
        let index = this.subscription.findIndex((e:any)=>e == plan)
        console.log("index",index)
        this.subscription.splice(index,1)
      }
    }
  }
}
