import { Component, trigger, state, style, transition, animate, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { StackConfig, Stack, Card, ThrowEvent, DragEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';

import { NavController, ModalController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('onePanel', [
      state('inactive', style({
      })),
      state('active', style({
        transform: 'translate(-100%, 0px)',
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('textPanel', [
      state('inactive', style({
        transform: 'scale(0)',
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out')),
    ]),
    trigger('markPanel', [
      state('inactive', style({
      })),
      state('active', style({
        border: '2px solid #00ff00',
        opacity: 1,
        backgroundColor: "green",
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
export class Home {
  @ViewChild("myswing1") swingStack: SwingStackComponent;
  @ViewChildren("mycards1") swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;

  oneState: string = 'inactive';
  txtState: string = 'inactive';
  markState: string = 'inactive';
  recDivState: string = 'inactive';
  recImageState: string = 'inactive';
  oneCardShowState: string = 'inactive';
  recordState: boolean = true;
  recordChange: boolean = true;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.stackConfig = {
      throwOutConfidence: (offset, element) => {
        // return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
        return Math.min(Math.abs(offset) / (600 / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
    this.cards = ["What are those.",
      "This is the best app I have been ever used in my life."];
  }

  onItemMove(element, x, y, r) {
    element.style.background = "#ffffff";
    element.style["transform"] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  voteUp(like: boolean) {
    this.cards.push("What are those.");
  }

  goToNotifications() {
    this.navCtrl.push(NotificationPage, {}, {animate:true, direction:'forward'});
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
      this.oneCardShowState = (this.oneCardShowState === 'inactive' ? 'active' : 'inactive');
      this.recordState = true;
      this.oneState = (this.oneState === 'inactive' ? 'active' : 'inactive');
      setTimeout(() => {
        this.txtState = (this.txtState === 'inactive' ? 'active' : 'inactive');
      }, 500);
      setTimeout(() => {
        this.markState = (this.markState === 'inactive' ? 'active' : 'inactive');
      }, 1000);
      setTimeout(() => {
        this.txtState = (this.txtState === 'inactive' ? 'active' : 'inactive');
      }, 2000);
      setTimeout(() => {
        let listModal = this.modalCtrl.create(ModalPage);
        listModal.present();
      }, 3000);
    }
  }
}