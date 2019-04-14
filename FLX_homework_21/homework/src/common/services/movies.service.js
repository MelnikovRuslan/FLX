export class MoviesService {
  constructor($http) {
    this.$http = $http;
  }

  findMovieById(id) {
    return Promise
    .resolve(this.$http.get('https://reactjs-cdp.herokuapp.com/movies'))
    .then(response => response.data)
    .then(res => res.data.find(element => Number(element.id) === Number(id)));
  }

  getAllMovies() {
    return Promise
    .resolve(this.$http.get('https://reactjs-cdp.herokuapp.com/movies'))
    .then(response => response.data)
    .then(test => test.data);
  }
}

MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];

