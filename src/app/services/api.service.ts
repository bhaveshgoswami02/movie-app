import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  //-------------------------------- Movies' Functions -------------------------------//
  getLatestMovies(): Observable<Object> {
    let url = "https://api.themoviedb.org/3/movie/latest?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getMostRatedMovie() {
    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getCertificationMovies() {
    let url = "https://api.themoviedb.org/3/certification/movie/list?api_key=" + environment.api
    return this.http.get(url)
  }

  getMovieDetail(movieId: string) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getMovieVideo(movieId: string) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getSimilarMovies(movieId: string) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "/similar?api_key=" + environment.api + "&language=en-US&page=1"
    return this.http.get(url)
  }

  getUpcommingMovies() {
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + environment.api + "&language=en-US&page=1"
    return this.http.get(url)
  }

  getPopularMovie() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=" + environment.api + "&language=en-US&page=1"
    return this.http.get(url)
  }







  //-------------------------------- TV's Fucntions -------------------------------//

  getLatestTv(): Observable<Object> {
    let url = "https://api.themoviedb.org/3/tv/latest?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getMostRatedTv() {
    let url = "https://api.themoviedb.org/3/tv/top_rated?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getCertificationTv() {
    let url = "https://api.themoviedb.org/3/certification/tv/list?api_key=" + environment.api
    return this.http.get(url)
  }

  getTvDetail(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getTvVideo(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/videos?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getSimilarTv(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/similar?api_key=" + environment.api + "&language=en-US&page=1"
    return this.http.get(url)
  }

  getPopularTv() {
    let url = "https://api.themoviedb.org/3/tv/popular?api_key=" + environment.api + "&language=en-US&page=1"
    return this.http.get(url)
  }



  //------------------------------- Episodes Fucntions --------------------------------//

  getEpisodeGroups(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/episode_groups?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getEpisodeVideo(tvId: string, seasonNumber: string, episodeNumber: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/season/" + seasonNumber + "/episode/" + episodeNumber + "/videos?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }

  getEpisodeDetail(tvId: string, seasonNumber: string, episodeNumber: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/season/" + seasonNumber + "/episode/" + episodeNumber + "?api_key=" + environment.api + "&language=en-US"
    return this.http.get(url)
  }



  //------------------------------- Extra Fucntions --------------------------------//
  getTrending() {
    let url = "https://api.themoviedb.org/3/trending/all/day?api_key=" + environment.api
    return this.http.get(url)
  }

  search(queryParams: any) {
    let url = "https://api.themoviedb.org/3/search/multi?api_key="+ environment.api +"&language=en-US&query=" + queryParams +"&page=1&include_adult=false"
    return this.http.get(url)
  }



}
