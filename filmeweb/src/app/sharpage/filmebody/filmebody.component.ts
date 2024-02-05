import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../tmdb';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-filmebody',
  standalone: true,
  imports: [],
  templateUrl: './filmebody.component.html',
  styleUrl: './filmebody.component.css',
})
export class FilmebodyComponent implements OnInit{
  constructor(private tmdbService: TMDBService) {}

  ngOnInit(): void {
    this.tmdbService.callApi('discover/movie?api_key=16bdb5ba918d47d3db2683ffc54213e3', 0).subscribe((data) => {
      console.log(data.results[1].title);
      
    });
  }
}
