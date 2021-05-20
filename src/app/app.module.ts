import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './share/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { TabComponent } from './share/tab/tab.component';
import { AllMediasComponent } from './pages/all-medias/all-medias.component';
import { AllTvComponent } from './pages/all-tv/all-tv.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SkeletonComponent } from './share/skeleton/skeleton.component';
import { PagesComponent } from './pages/pages.component';
import { LoaderComponent } from './share/loader/loader.component';
import { ToastComponent } from './share/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    MovieDetailsComponent,
    HeaderComponent,
    TabComponent,
    AllMediasComponent,
    AllTvComponent,
    AllMoviesComponent,
    SearchComponent,
    ProfileComponent,
    SkeletonComponent,
    PagesComponent,
    LoaderComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
