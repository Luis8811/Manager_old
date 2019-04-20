import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http'; //Importante y necesario cuando se defina el servicio

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {ClientsPage} from '../pages/clients/clients';
import {FinancesPage} from '../pages/finances/finances';
import {StaffPage} from '../pages/staff/staff';
import {ProcessesPage} from '../pages/processes/processes'; 
import {ProductsPage} from '../pages/products/products';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurateurApiProvider } from '../providers/restaurateur-api/restaurateur-api';
//import {ChartsModule} from 'ng2-charts';
import { ChartsModule } from 'ng2-charts-x';
import{ Moment} from 'moment';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, ClientsPage, FinancesPage, StaffPage, ProcessesPage, ProductsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, ChartsModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, ClientsPage, FinancesPage, StaffPage, ProcessesPage, ProductsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurateurApiProvider
  ]
})
export class AppModule {}
