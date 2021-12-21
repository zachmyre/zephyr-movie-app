import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritemovies',
  templateUrl: './favoritemovies.component.html',
  styleUrls: ['./favoritemovies.component.css'],
})
export class FavoritemoviesComponent implements OnInit {
  storage;
  movies;
  posters;
  constructor() {}

  ngOnInit() {
    this.movies = [];
    this.posters = [];
    this.storage = Object.entries(localStorage);
    this.movies = Object.keys(localStorage);
    this.posters = Object.values(localStorage);
    console.log(this.movies);
    console.log(this.posters);
  }

  removeItem(movie) {
    localStorage.removeItem(movie);
    window.location.reload();
  }
}
