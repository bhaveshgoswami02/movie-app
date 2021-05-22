import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailRoutingModule } from './movie-details-routing.module';
import { SharedModule } from 'src/app/share/shared.module';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    SharedModule,
    PipeModule
  ],
  declarations: [MovieDetailsComponent]
})

export class MovieDetailsComponentModule {}
