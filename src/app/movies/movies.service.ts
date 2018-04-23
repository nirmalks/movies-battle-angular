import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient , HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { apiKey } from '../../api_key';
import {MovieObj } from '../models/movie';

@Injectable()
export class MoviesService {
  url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  constructor(private http: HttpClient) { }

  fetchMovies() {
    return this.http.get(this.url).map((response: any) => response);
  }

  fetchMovieById(movieName) {
    return this.http.get(`https://api.themoviedb.org/3/find/${movieName}?api_key=${apiKey}&external_source=imdb_id`)
    .map((response: any) => response);
  }
}
