export default class Director {
  this.name = '';
  this.age = 0;
  this.gender = '';
  this.movies = [];

  constructor(name, age, gender, movies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.movies = movies;
  }
}
