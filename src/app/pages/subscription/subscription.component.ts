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
  subscription: any = [
    { "display_priority": 57, "logo_path": "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg", "provider_id": 8, "provider_name": "Netflix", "isBuy": false },
    { "display_priority": 85, "logo_path": "/zLX0ExkHc8xJ9W4u9JgnldDQLKv.jpg", "provider_id": 29, "provider_name": "Sky Go", "isBuy": false },
    { "display_priority": 92, "logo_path": "/bzWGPi4Jxdzm9ehkT9ZDuiwj1Hp.jpg", "provider_id": 39, "provider_name": "Now TV", "isBuy": false },
    { "display_priority": 630, "logo_path": "/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg", "provider_id": 10, "provider_name": "Amazon Video", "isBuy": false },
    { "display_priority": 49, "logo_path": "/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg", "provider_id": 337, "provider_name": "Disney Plus", "isBuy": false },
  ]

  constructor(public auth: AuthService, public common: CommonService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.auth.getUserDataFromDb(this.auth.getUid()).subscribe((res: any) => {
      console.log("getData",res)
      if(res.subscription && res.subscription.length>0) {
        this.subscription = res.subscription
      }
    })
  }

  onSubmit() {
    this.common.startLoader()
    this.auth.updateUser(this.auth.getUid(), { subscription: this.subscription }).then(res => {
      this.common.showToast("Congratulations for unlimited entertainment!")
    }).catch(err => {
      this.common.showToast(err)
    }).finally(() => {
      this.common.stopLoader()
    })
  }

  // selectSubscription(plan:string) {
  //   if(this.subscription.length==0) {
  //     this.subscription.push(plan)
  //   }
  //   else
  //   {
  //     if(this.subscription.findIndex((e:any)=>e == plan) === -1) {
  //       this.subscription.push(plan)
  //     }
  //     else
  //     {
  //       let index = this.subscription.findIndex((e:any)=>e == plan)
  //       console.log("index",index)
  //       this.subscription.splice(index,1)
  //     }
  //   }
  // }

  selectSubscription(index: any) {
    this.subscription[index].isBuy = !this.subscription[index].isBuy
    console.log("subscription",this.subscription)
  }
}
