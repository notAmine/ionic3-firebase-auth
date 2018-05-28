import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';
import {MoviesPage} from "../pages/movies/movies";
import {MovieInfoPage} from "../pages/movie-info/movie-info";
import {MovieService} from "../services/movie-service";
import {IonicStorageModule} from "@ionic/storage";
import {WatchlistPage} from "../pages/watchlist/watchlist";

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
    MoviesPage,
    MovieInfoPage,
    WatchlistPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),

		AngularFireModule.initializeApp(firebaseConfig.fire),

		ComponentsModule,
		NgxErrorsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
    IonicStorageModule.forRoot()

  ],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
    MoviesPage,
    MovieInfoPage,
    WatchlistPage
	],
	providers: [
		Config,
		StatusBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AngularFireAuth,
		AuthService,
    MovieService,
    Storage,
	]
})
export class AppModule {
}
