import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finances',
  templateUrl: 'finances.html',
})
export class FinancesPage {
  
  // Line chart
  // FIXME Arreglar para que el gráfico tome los datos reales
  public lineChartType: string = 'line';
  public lineChartLabels: string[] =["Lun", "Mar", "Miér", "Jue", "Vie", "Sáb", "Dom"];
  public lineChartDatasets: any[] = [{data:[10, 5, 3, 4, 2, 0, 2], label:"Ingresos"},{data:[3, 1, 1, 3, 2, 3, 3], label:"Costos"},{ data:[7, 4, 2, 3, 3, 2, 1], label:"Utilidades"}];

  // Bar chart de la diferencia entre gastos e ingresos
  // FIXME Arreglar para poner en el gráfico los datos reales
  public financesBarChartType: string ='bar';
  public financesBarChartLabels: string[] = ["Ingresos", "Costos", "Utilidades"];
  public financesBarChartData: any[] = [{data:[100, 60, 40], label:"Mes en curso"}, {data:[170, 70, 100], label:"Mes anterior"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancesPage');
  }

}
