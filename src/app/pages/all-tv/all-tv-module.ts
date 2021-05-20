import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTvRoutingModule } from './all-tv-routing.module';
import { AllTvComponent } from './all-tv.component';
import { SharedModule } from 'src/app/share/shared.module';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    AllTvRoutingModule,
    SharedModule,
    FormsModule,
    SwiperModule
  ],
  declarations: [AllTvComponent]
})
export class AllTvComponentModule {}
