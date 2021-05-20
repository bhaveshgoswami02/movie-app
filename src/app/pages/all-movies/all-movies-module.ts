import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies.component';
import { AllMoviesRoutingModule } from './all-movies-routing.module';
import { SharedModule } from 'src/app/share/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    AllMoviesRoutingModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [AllMoviesComponent]
})
export class AllMoviesComponentModule {}
