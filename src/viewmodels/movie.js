export default class Movie
{
  this.name = '';
  this.description = '';
  this.yearReleased = 0;
  this.rating = 0;
  this.actors = [];
  this.directors = [];

  constructor(name, yearReleased, rating, actors = [], directors = []) {
    this.name = name;
    this.yearReleased = yearReleased;
    this.rating = rating;
    this.actors = actors;
    this.directors = directors;
  }
}
