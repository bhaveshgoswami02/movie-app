import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AllMediasComponent } from './pages/all-medias/all-medias.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { AllTvComponent } from './pages/all-tv/all-tv.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',component:PagesComponent,canActivate:[AuthGuardService],children:[
    {path:'',component:HomeComponent},
    {path:'tv',component:AllTvComponent},
    {path:'movies',component:AllMoviesComponent},
    {path:'detail/:mediaType/:id',component:MovieDetailsComponent},
    {path:'media/:mediaType',component:AllMediasComponent},
    {path:'media/:mediaType/:moreLikeType/:id',component:AllMediasComponent},
    {path:'search',component:SearchComponent},
    {path:'profile',component:ProfileComponent},
  ]},
  {path:'auth',component:AuthComponent,children:[
    {path:'',component:SigninComponent},
    {path:'register',component:RegisterComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
