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
    let url = "https://api.themoviedb.org/3/movie/latest?api_key=" + environment.api + "&language=" + environment.language + "&regions=" + environment.region
    return this.http.get(url)
  }

  getMostRatedMovie(page: number) {
    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + environment.api + "&language=" + environment.language + "&page=" + page + "&regions=" + environment.region
    return this.http.get(url)
  }

  getCertificationMovies() {
    let url = "https://api.themoviedb.org/3/certification/movie/list?api_key=" + environment.api
    return this.http.get(url)
  }

  getMovieDetail(movieId: string) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + environment.api + "&language=" + environment.language
    return this.http.get(url)
  }

  getMovieVideo(movieId: string) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=" + environment.api + "&language=" + environment.language + "&regions=" + environment.region
    return this.http.get(url)
  }

  getSimilarMovies(movieId: string, page: number) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "/similar?api_key=" + environment.api + "&language=" + environment.language + "&page=" + page + "&regions=" + environment.region
    return this.http.get(url)
  }

  getUpcommingMovies(page: number) {
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + environment.api + "&language=" + environment.language + "&page=" + page + "&regions=" + environment.region
    return this.http.get(url)
  }

  getPopularMovie(page: number) {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=" + environment.api + "&language=" + environment.language + "&page=" + page + "&region=" + environment.region
    return this.http.get(url)
  }

  getMovieProviders(movieId: any) {
    let url = "https://api.themoviedb.org/3/movie/" + movieId + "/watch/providers?api_key=" + environment.api
    return this.http.get(url)
  }

  getNowPlaying(page: number): Observable<any> {
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + environment.api + "&page=" + page + "&language=" + environment.language + "&region=" + environment.region
    return this.http.get(url)
  }



  //-------------------------------- TV's Fucntions -------------------------------//

  getLatestTv(): Observable<Object> {
    let url = "https://api.themoviedb.org/3/tv/latest?api_key=" + environment.api + "&language=" + environment.language + "&regions=" + environment.region
    return this.http.get(url)
  }

  getMostRatedTv(page: number) {
    let url = "https://api.themoviedb.org/3/tv/top_rated?api_key=" + environment.api + "&language=" + environment.language + "&page=" + page + "&regions=" + environment.region
    return this.http.get(url)
  }

  getCertificationTv() {
    let url = "https://api.themoviedb.org/3/certification/tv/list?api_key=" + environment.api
    return this.http.get(url)
  }

  getTvDetail(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "?api_key=" + environment.api + "&language=" + environment.language
    return this.http.get(url)
  }

  getTvVideo(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/videos?api_key=" + environment.api + "&language=" + environment.language + "&regions=" + environment.region
    return this.http.get(url)
  }

  getSimilarTv(tvId: string, page: number) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/similar?api_key=" + environment.api + "&language=" + environment.language + "&regions=" + environment.region + "&page=" + page
    return this.http.get(url)
  }

  getPopularTv(page: number) {
    let url = "https://api.themoviedb.org/3/tv/popular?api_key=" + environment.api + "&language=" + environment.language + "&regions=" + environment.region + "&page=" + page
    return this.http.get(url)
  }

  getTvProviders(tvId: any) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/watch/providers?api_key=" + environment.api
    return this.http.get(url)
  }


  //------------------------------- Episodes Fucntions --------------------------------//

  getEpisodeGroups(tvId: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/episode_groups?api_key=" + environment.api + "&language=" + environment.language
    return this.http.get(url)
  }

  getEpisodeVideo(tvId: string, seasonNumber: string, episodeNumber: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/season/" + seasonNumber + "/episode/" + episodeNumber + "/videos?api_key=" + environment.api + "&language=" + environment.language
    return this.http.get(url)
  }

  getEpisodeDetail(tvId: string, seasonNumber: string, episodeNumber: string) {
    let url = "https://api.themoviedb.org/3/tv/" + tvId + "/season/" + seasonNumber + "/episode/" + episodeNumber + "?api_key=" + environment.api + "&language=" + environment.language
    return this.http.get(url)
  }


  //------------------------------- Extra Fucntions --------------------------------//
  getTrending(page: number) {
    let url = "https://api.themoviedb.org/3/trending/all/day?api_key=" + environment.api + "&page=" + page
    return this.http.get(url)
  }

  search(queryParams: any) {
    let url = "https://api.themoviedb.org/3/search/multi?api_key=" + environment.api + "&language=" + environment.language + "&query=" + queryParams + "&regions=" + environment.region + "&page=1&include_adult=false"
    return this.http.get(url)
  }


}
