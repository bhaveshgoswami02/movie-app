import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailRoutingModule } from './movie-details-routing.module';
import { SharedModule } from 'src/app/share/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    SharedModule
  ],
  declarations: [MovieDetailsComponent]
})

export class MovieDetailsComponentModule {}
