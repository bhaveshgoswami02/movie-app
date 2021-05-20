import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SharedModule } from 'src/app/share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionComponent]
})

export class SubscriptionComponentModule {}
