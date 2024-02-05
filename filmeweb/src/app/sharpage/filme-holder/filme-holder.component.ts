import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../tmdb';
import { CommonModule } from '@angular/common'; // Importe o CommonModule


@Component({
  selector: 'app-filme-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filme-holder.component.html',
  styleUrl: './filme-holder.component.css',
})
export class FilmeHolderComponent implements OnInit{
  public filmes: any;
  constructor(private tmdbService: TMDBService) {}

  ngOnInit(): void {
    this.tmdbService.callApi('discover/movie?api_key=16bdb5ba918d47d3db2683ffc54213e3', 0).subscribe((data) => {
      this.filmes = data;      
    });
  }
}