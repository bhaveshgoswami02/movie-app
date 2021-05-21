import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMediasRoutingModule } from './all-medias-routing.module';
import { AllMediasComponent } from './all-medias.component';
import { SharedModule } from 'src/app/share/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    AllMediasRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ],
  declarations: [AllMediasComponent]
})
export class AllMediasComponentModule {}
