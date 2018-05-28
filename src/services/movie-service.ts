///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MovieService {

  constructor(private http:Http) {

  }

  searchMovies(movieName): Observable<any> {
    var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    return this.http.get(url).map(res => res.json());
  }
}
