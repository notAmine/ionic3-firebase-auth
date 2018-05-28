import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Storage} from '@ionic/storage';
import {MovieService} from "../../services/movie-service";
import {MovieInfoPage} from "../movie-info/movie-info";


/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies: Array<any>;

  constructor(public navCtrl: NavController, private movieService: MovieService,private storage: Storage) {
    this.storage.get('MyStore').then((data)=>{
      console.log('check the data '+data);});

  };
  setData(val){
    console.log('data added'+ val);
    this.storage.get('MyStore').then((data)=>{
      if (data!=null)
      {
        data.push(val);
        this.storage.set('MyStore', data);
      }

      else
      {
        let array=[];
        array.push(val);
        this.storage.set('MyStore', array);

      }
    });
    return false;
  }



  searchMovieDB(event, key) {
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }

  itemTapped(event, movie) {
    console.log(movie);
    this.navCtrl.push(MovieInfoPage, {
      movie: movie
    });
  }

}
