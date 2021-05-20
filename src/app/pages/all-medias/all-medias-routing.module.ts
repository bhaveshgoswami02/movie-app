import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMediasComponent } from './all-medias.component';


const routes: Routes = [
  {
    path: '',
    component: AllMediasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllMediasRoutingModule {}
