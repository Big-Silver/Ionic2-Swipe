import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AskPage } from '../ask/ask';
import { AnswerPage } from '../answer/answer';
/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  animations: [
    trigger('titlePanel', [
      state('inactive', style({
        transform: 'scale(0)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('btn1Panel', [
      state('inactive', style({
        transform: 'scale(0)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('btn2Panel', [
      state('inactive', style({
        transform: 'scale(0)',
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
    trigger('btn3Panel', [
      state('inactive', style({
        transform: 'scale(0)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ]
})
export class ModalPage {
  titleState: string = 'inactive';
  firstState: string = 'inactive';
  secondState: string = 'inactive';
  thirdState: string = 'inactive';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    setTimeout(() => {
      this.titleState = (this.titleState === 'inactive' ? 'active' : 'inactive');
    }, 500);
    setTimeout(() => {
      this.firstState = (this.firstState === 'inactive' ? 'active' : 'inactive');
    }, 1000);
    setTimeout(() => {
      this.secondState = (this.secondState === 'inactive' ? 'active' : 'inactive');
    }, 1500);
    setTimeout(() => {
      this.thirdState = (this.thirdState === 'inactive' ? 'active' : 'inactive');
    }, 2000);
  }

  dismiss() {
    // this.viewCtrl.dismiss();
  }

  ask() {
    this.dismiss();
    this.navCtrl.setRoot(AskPage);
    // this.rootPage = AskPage;
  }

  answer() {
    this.dismiss();
    this.navCtrl.setRoot(AnswerPage, {url: "photo_5.png", answer: "How is your day today?"});
  }

  continue() {
    this.dismiss();
  }
}
