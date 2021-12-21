import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movielist/movielist.component';
import { RouterModule, Routes } from '@angular/router';
import { FavoritemoviesComponent } from './favoritemovies/favoritemovies.component';
import { ServiceWorkerModule } from '@angular/service-worker';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MovieListComponent,
    pathMatch: 'full',
  },
  {
    path: 'favorites',
    component: FavoritemoviesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    FavoritemoviesComponent,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
