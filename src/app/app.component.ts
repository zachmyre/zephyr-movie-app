import { Component, OnInit, VERSION } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: string;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): any {
    this.movieService.getMovies().subscribe((movies: object) => {
      this.movies = movies['results'].map((movie) => movie);
      console.log(JSON.stringify(movies['results']));
    });
  }

  name = 'Angular ' + VERSION.major;
}
