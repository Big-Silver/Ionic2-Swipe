import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Home } from '../home/home';
import { ModalPage } from '../modal/modal';
/*
  Generated class for the Ask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
  animations: [
    trigger('textPanel', [
      state('inactive', style({
      })),
      state('active', style({
        transform: 'translate(-1000px, 0)',
      })),
      transition('inactive => active', animate('1000ms ease-in'))
    ]),
    trigger('askPanel', [
      state('inactive', style({
        transform: 'scale(0)',
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('sendPanel', [
      state('inactive', style({
        transform: 'scale(0)',
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('replaceBackground', [
      state('inactive', style({
      })),
      state('active', style({
        backgroundImage: 'url(assets/img/background.png)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
    trigger('changeImageColor', [
      state('inactive', style({
      })),
      state('active', style({
        color: '#2d8dfe',
      })),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
    trigger('changeFontColor', [
      state('inactive', style({
      })),
      state('active', style({
        color: '#000000',
      })),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
    trigger('recDiv', [
      state('inactive', style({
        display: "none"
      })),
      state('active', style({
        display: "block"
      })),
      transition('inactive => active', animate('0ms ease-in')),
      transition('active => inactive', animate('0ms ease-out')),
    ]),
    trigger('buttons', [
      state('inactive', style({
        display: "none"
      })),
      state('active', style({
        display: "inline-block"
      })),
      transition('inactive => active', animate('0ms ease-in')),
      transition('active => inactive', animate('0ms ease-out')),
    ]),
    trigger('recImage', [
      state('inactive', style({
        content: "url(assets/img/record.png)"
      })),
      state('active', style({
        content: "url(assets/img/pause.png)"
      })),
      transition('inactive => active', animate('0ms ease-in')),
      transition('active => inactive', animate('0ms ease-out')),
    ]),
  ]
})
export class AskPage {
  textState : string = "inactive";
  askState : string = "inactive";
  sendState : string = "inactive";
  imgState : string = "inactive";
  fontState : string = "inactive";
  backgroundState : string = "inactive";
  recDivState: string = 'inactive';
  recImageState: string = 'inactive';
  editState: string = 'active';
  senderState: string = 'inactive';
  nextState: string = 'inactive';
  recordState: boolean = true;
  recordChange: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPage');
  }

  close() {
    this.navCtrl.push(Home);
  }

  change() {
    this.textState = (this.textState === 'inactive' ? 'active' : 'inactive');
  }

  record() {
    if (this.recordState && this.recordChange) {
      this.recDivState = (this.recDivState === 'inactive' ? 'active' : 'inactive');
      this.recImageState = (this.recImageState === 'inactive' ? 'active' : 'inactive');
      this.recordState = false;
      this.recordChange = false;
    } else if (!this.recordChange && !this.recordState) {
      this.recDivState = (this.recDivState === 'inactive' ? 'active' : 'inactive');
      this.recImageState = (this.recImageState === 'inactive' ? 'active' : 'inactive');
      this.recordState = true;
      this.editState = (this.editState === 'inactive' ? 'active' : 'inactive');
      this.senderState = (this.senderState === 'inactive' ? 'active' : 'inactive');
      setTimeout(() => {
        this.askState = (this.askState === 'inactive' ? 'active' : 'inactive');
      }, 500);
      setTimeout(() => {
        this.sendState = (this.sendState === 'inactive' ? 'active' : 'inactive');
      }, 1500);
    }
  }

  send() {
    this.sendState = (this.sendState === 'inactive' ? 'active' : 'inactive');
    setTimeout(() => {
      this.backgroundState = (this.backgroundState === 'inactive' ? 'active' : 'inactive');
      this.fontState = (this.fontState === 'inactive' ? 'active' : 'inactive');
      this.imgState = (this.imgState === 'inactive' ? 'active' : 'inactive');
    }, 500);
    setTimeout(() => {
      this.nextState = (this.nextState === 'inactive' ? 'active' : 'inactive');
    }, 1200);
    setTimeout(() => {
      let listModal = this.modalCtrl.create(ModalPage);
      listModal.present();
    }, 2000);
  }
}
