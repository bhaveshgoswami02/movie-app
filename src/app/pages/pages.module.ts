import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  declarations: [PagesComponent]
})

export class PagesComponentModule {}
