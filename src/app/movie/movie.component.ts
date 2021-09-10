import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //votes: number;
  upVote: number;
  downVote: number;
  name: string;
  pays: string;
  category: string;
  description: string;
  releaseDate: Date;

  constructor() { 
    this.upVote = 4;
    this.downVote = 2;
    this.name = "The Matrix";
    this.pays = "US";
    this.category = "SF/Action"
    this.description = "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace";
    this.releaseDate = new Date("1999-03-31");
  }

  voteUp() {
    this.upVote += 1;
  }
    
  voteDown() {
   this.downVote += 1;
  }

  ngOnInit(): void {
  }

}
