import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Notification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  items: Array<{name: string, imgUrl: string, state: string, time: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {name: "Marie Day", imgUrl: "assets/img/photo_2.png", state: "Sent you a message.", time: "09:30"},
      {name: "Ashton Bingham", imgUrl: "assets/img/photo_3.png", state: "Sent you a message.", time: "09/10"},
      {name: "Jason Tan", imgUrl: "assets/img/photo_4.png", state: "Sent you a message.", time: "10/10"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
