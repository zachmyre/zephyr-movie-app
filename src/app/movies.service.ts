import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY = '5bd1367ec3436aecde98c63951042f32';

const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(BASE_URL);
  }

  getSearchedMovies(search) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
    );
  }
}
