import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [SearchComponent]
})

export class SearchComponentModule {}
