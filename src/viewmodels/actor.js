export default class Actor {
  this.name = '';
  this.age = 0;
  this.gender = '';
  this.agent = '';
  this.movies = [];

  constructor(name, age, gender, movies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.movies = movies;
  }
}
