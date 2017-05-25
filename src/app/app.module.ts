import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddTaskPage } from '../pages/add-task/add-task';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormatdatePipe } from '../pipes/formatdate/formatdate';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDuJ9YArpEIscOX5_iPBeMhPldLiTNlmQw",
    authDomain: "my-task-planner.firebaseapp.com",
    databaseURL: "https://my-task-planner.firebaseio.com",
    projectId: "my-task-planner",
    storageBucket: "my-task-planner.appspot.com",
    messagingSenderId: "1065892340674"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddTaskPage,
    FormatdatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}