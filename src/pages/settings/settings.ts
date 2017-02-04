import { Component } from '@angular/core';
import {RedditsSevice} from '../../app/services/reddits.service';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  
  catergory:any;
  limit :any;
  constructor(public navCtrl: NavController,private redditService:RedditsSevice) {
      this.getDefaults();
  }


getDefaults(){
  this.catergory="sports";
  this.limit = 10;
}

}
