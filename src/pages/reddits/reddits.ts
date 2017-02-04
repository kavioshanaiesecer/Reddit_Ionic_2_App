import { Component } from '@angular/core';
import {RedditsSevice} from '../../app/services/reddits.service';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  
  items:any;
  constructor(public navCtrl: NavController,private redditService:RedditsSevice) {

  }

  ngOnInit(){
    this.getPosts('sports',10);
  }

  getPosts(catergory,limit){
    this.redditService.getPosts(catergory,limit).subscribe(response => {
      console.log(response);
      //getting API Data to the HTML
      this.items=response.data.children;
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }


}
