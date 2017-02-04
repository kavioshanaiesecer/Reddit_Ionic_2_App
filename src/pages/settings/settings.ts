import { Component } from '@angular/core';
import {RedditsSevice} from '../../app/services/reddits.service';
import { NavController } from 'ionic-angular';
import {RedditsPage} from '../reddits/reddits';

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
  if(localStorage.getItem('catergory')!=null){
    this.catergory = localStorage.getItem('catergory');
  }
  else{
  this.catergory="sports";
  }

   if(localStorage.getItem('limit')!=null){
    this.limit = localStorage.getItem('limit');
  }
  else{
  this.limit=10;
  }
}

// getDefaults(){
//   this.catergory = localStorage.getItem('catergory');
//   this.limit = localStorage.getItem('limit');
// }

setDefaults(){
  localStorage.setItem('catergory',this.catergory);
  localStorage.setItem('limit',this.limit);
  this.navCtrl.push(RedditsPage);
}

}
