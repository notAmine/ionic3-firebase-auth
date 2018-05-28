import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { ToastController } from 'ionic-angular';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import {MoviesPage} from "../pages/movies/movies";
import {WatchlistPage} from "../pages/watchlist/watchlist";

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform,
		menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService,
    private toastCtrl: ToastController) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'All Movies', component: MoviesPage, icon: 'film' },
			{ title: 'My Watchlist', component: WatchlistPage, icon: 'star' },
			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			{ title: 'Cinemas maps', component: GoogleMapsPage, icon: 'map' },
		];
	}

	initializeApp() {
			this.platform.ready().then(() => {
				this.statusBar.styleDefault();
			});

			this.auth.afAuth.authState
				.subscribe(
					user => {
						if (user) {
							this.rootPage = HomePage;
						} else {
							this.rootPage = LoginPage;
						}
					},
					() => {
						this.rootPage = LoginPage;
					}
				);
	}

	login() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	logout() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}

	openPage(page) {
	  if(this.auth.authenticated){
      this.menu.close();
      this.nav.setRoot(page.component);
    }
    else{
	    this.presentToast();
      this.menu.close();
      this.nav.setRoot(LoginPage);
    }
	}

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You Need To Log in First!',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}

