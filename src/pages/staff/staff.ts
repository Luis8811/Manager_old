import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {

   // FIXME Arreglar para poner en el gráfico los datos reales
   public workersBySexDoughnutChartLabels: string[] =['Mujeres', 'Hombres'];
   public workersBySexDoughnutChartData: number[]=[5,2];
   public workersBySexDoughnutChartType: string = 'doughnut';

   // FIXME Arreglar para poner en el gráfico los datos reales
   public workersByOccupationDoughnutChartLabels: string[] =['cocinero', 'camarero'];
   public workersByOccupationDoughnutChartData: number[]=[2,5];
   public workersByOccupationDoughnutChartType: string = 'doughnut';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
  }

}
