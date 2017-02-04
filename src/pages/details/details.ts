import { Component } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';

@Component({

//here we removed the selector for benifitial things when reload to the next page 
  selector: '',
  templateUrl: 'details.html'
})

export class DetailsPage {
    item:any;
  constructor(public navCtrl: NavController, public params:NavParams) {
        this.item = params.get('item');
  }

}
