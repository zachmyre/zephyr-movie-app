import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovieListComponent implements OnInit {
  overview: boolean = false;
  movies: string;
  search: string;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): any {
    this.movieService.getMovies().subscribe((movies: object) => {
      this.movies = movies['results'].map((movie) => movie);
    });
  }

  updateOverview() {
    if (this.overview) {
      this.overview = false;
    } else {
      this.overview = true;
    }
    console.log(this.overview);
  }

  searchMovies(search) {
    console.log(search);
    if (search === '') {
      this.movieService.getMovies().subscribe((movies: object) => {
        this.movies = movies['results'].map((movie) => movie);
      });
    } else {
      this.movieService
        .getSearchedMovies(search)
        .subscribe((movies: object) => {
          this.movies = movies['results'].map((movie) => movie);
        });
    }
  }

  addToLocalStorage(title, poster) {
    localStorage.setItem(title, poster);
  }
}
