import { MoviesService } from "./common/services/movies.service";
export class AppController {
  constructor(moviesService) {
    this.moviesService = moviesService;
    this.movies = [];
    this.button = null;
    this.user = {};
  }

  $onInit() {
    this.button = "Logout";

    this.user = {
      email: "user@email.com",
      password: "3%2f43#}54f[st31"
    };

    this.moviesService.getAllMovies().then((result) => {
      this.movies = result;
    });
  }

  logout(event) {
    // Make a service call or simmilar...
    if (event.userEmail === this.user.email) {
      console.log(">>>User has been logged out: ", { email: event.userEmail });
    }
  }
}
AppController.$inject = [MoviesService.serviceName];