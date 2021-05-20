import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMediasRoutingModule } from './all-medias-routing.module';
import { AllMediasComponent } from './all-medias.component';
import { SharedModule } from 'src/app/share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AllMediasRoutingModule,
    SharedModule
  ],
  declarations: [AllMediasComponent]
})
export class AllMediasComponentModule {}
