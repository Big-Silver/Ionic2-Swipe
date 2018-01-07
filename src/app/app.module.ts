import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwingStackComponent, SwingCardComponent } from 'angular2-swing';
import { Home } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { ModalPage } from '../pages/modal/modal';
import { AskPage } from '../pages/ask/ask';
import { AnswerPage } from '../pages/answer/answer';

@NgModule({
  declarations: [
    MyApp,
    Home,
    NotificationPage,
    ModalPage,
    AskPage,
    AnswerPage,
    SwingCardComponent,
    SwingStackComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      },
      backButtonText: '',
      // backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    NotificationPage,
    ModalPage,
    AskPage,
    AnswerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
