import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTvComponent } from './all-tv.component';


const routes: Routes = [
  {
    path: '',
    component: AllTvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllTvRoutingModule {}
