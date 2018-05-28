import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Storage} from '@ionic/storage';
/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html',
})
export class WatchlistPage {

  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.storage.get('MyStore').then((data)=>{
      this.items=data;});
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

}
