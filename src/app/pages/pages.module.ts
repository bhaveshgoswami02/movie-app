import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../share/shared.module';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    PipeModule
  ],
  declarations: [PagesComponent]
})

export class PagesComponentModule {}
