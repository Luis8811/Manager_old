import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProcessesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-processes',
  templateUrl: 'processes.html',
})
export class ProcessesPage {

  // FIXME Arreglar para poner en el gráfico los datos reales
  public processesRadarChartType: string ='radar';
  public processesRadarChartLabels: string[] = ["Cant de pedidos", "Clientes atendidos", "Clientes nuevos", "Quejas/reclamaciones"];
  public processesRadarChartData: any[] = [{data:[100, 60, 40, 10], label:"Mes en curso"}, {data:[170, 70, 100, 0], label:"Mes anterior"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessesPage');
  }

}
