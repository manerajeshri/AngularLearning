import { Component, OnInit } from '@angular/core';
import { MoviesClass } from '../models/movie';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  title : string = "Top 3 movies";

  arrayOfMovies : MoviesClass[]=[
    { title: "3 Idiots", director: "Rajkumar", cast: "Amir", releaseDate: "2000"},
    { title: "Tumbad", director: "Rahil", cast: "rahi", releaseDate: "2020"},
    { title: "Kantara", director: "Rishab", cast: "Rishab", releaseDate: "2022"}
  ]

arrayOfSongs=["song1","song2","song3"]

  constructor() { }

  ngOnInit() {
  }

}
