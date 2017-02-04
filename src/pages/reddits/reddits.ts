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
  catergory:any;
  limit :any;
  constructor(public navCtrl: NavController,private redditService:RedditsSevice) {
      this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.catergory , this.limit);
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

  changeCatergory(){
    this.getPosts(this.catergory , this.limit);
  }


}
