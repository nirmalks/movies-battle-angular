import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  movies: any[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.fetchMovies().subscribe(
      data => {
        this.movies = data['results'];
      },
      err => {

      }
    );
  }

}
