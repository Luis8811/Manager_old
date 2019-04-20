import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ClientsPage} from '../pages/clients/clients';
import {FinancesPage} from '../pages/finances/finances';
import {StaffPage} from '../pages/staff/staff';
import {ProcessesPage} from '../pages/processes/processes';
import {ProductsPage} from '../pages/products/products';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Control diario', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      {title: 'Perspectiva del cliente', component: ClientsPage},
      {title: 'Perspectiva financiera', component: FinancesPage},
      {title: 'Perspectiva de procesos', component: ProcessesPage},
      {title: 'Perspectiva del personal', component: StaffPage},
      {title: 'Ofertas', component: ProductsPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
