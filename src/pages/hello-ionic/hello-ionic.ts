import { Component } from '@angular/core';
//import {Restaurateur} from '../../models/restaurateur';
import {Client} from '../../models/client';
import {RestaurateurApiProvider} from '../../providers/restaurateur-api/restaurateur-api';
//import {Chart} from 'chart.js';
//import {ChartsModule} from 'ng2-charts';
import moment from 'moment';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  //restaurants: Restaurateur[];

   /*   Perspectiva del cliente  */
  countOfProducts: any;
  public  clients: Client[];  // los clientes registrados
  public countOfMaleRegisteredClients = 0; // cantidad de clientes registrados que son hombres
  public countOfFemaleRegisteredClients = 0; // cantidad de clientes registrados que son mujeres
  public countOfFemaleChilds = 0;
  public countOfMaleChilds = 0;
  public countOfFemaleTeenagers = 0;
  public countOfMaleTeenagers = 0;
  public countOfYoungMales = 0;
  public countOfYoungFemales = 0;
  public countOfMaleAdults = 0;
  public countOfFemaleAdults = 0;
  public countOfElderlyWomen = 0;
  public countOfElderlyMen = 0; 
   /*   Fin de perspectiva del cliente */

   /* Perspectiva financiera */

   public incomesInWeek: number[]; // ingresos de la semana


   /* Fin de perspectiva financiera */

   /* Perspectiva de procesos */
   public  countOfRequestsInDay: number;
   public lineChartCountOfRequestsInWeekType: 'line';
   public lineChartCountOfRequestInWeekDatasets: any[];
   public lineChartCountOfRequestInWeekLabels: string[];

   public lineChartCountOfRequestsInMonthType: 'line';
   public lineChartCountOfRequestsInMonthDatasets: any[];
   public lineChartCountOfRequestInMonthLabels: string[];

   /* Fin de perspectiva de procesos*/
  name: any;
  price: any;
  description: any;
 // @ViewChild('barCanvas') barCanvas;

  //barChart: any;
  //public countOfCustomers: number;
 // public countOfClients : number;
  constructor(private restaurateurProvider: RestaurateurApiProvider) {
    //this.countOfCustomers = 0;
    
   this.getCountOfProducts();
   this.getRegisteredClients();
  
  
  }

  // Doughnut chart
  public doughnutChartLabels: string[] =['Mujeres', 'Hombres'];
  public doughnutChartData: number[]=[this.countOfFemaleRegisteredClients, this.countOfMaleRegisteredClients];
  public doughnutChartType: string = 'doughnut';

  // Bar chart
  public barChartType: string = 'bar';
  public barChartData: any[]; //[this.countOfMaleChilds, this.countOfFemaleChilds, this.countOfMaleTeenagers, this.countOfFemaleTeenagers];
  public barChartLabels: string[] = ["Niños", "Adolescentes", "Jóvenes", "Adultos", "Ancianos"];
  public barChartTitle: string = 'Clientes por grupos de edad';
  public barChartDataset: any[] = [{data:[], label:""}];

  // Line chart
  // FIXME Arreglar para que el gráfico tome los datos reales
  public lineChartType: string = 'line';
  public lineChartLabels: string[] =["Lunes", "Martes", "Miércoles"];
  public lineChartDatasets: any[] = [{data:[10, 5, 3], label:"Ingresos"},{data:[3, 1, 1], label:"Costos"},{ data:[7, 4, 2], label:"Utilidades"}];

  // Bar chart de la diferencia entre gastos e ingresos
  // FIXME Arreglar para poner en el gráfico los datos reales
  public financesBarChartType: string ='bar';
  public financesBarChartLabels: string[] = ["Ingresos", "Costos", "Utilidades"];
  public financesBarChartData: any[] = [{data:[100, 60, 40], label:"Rango elegido por el usuario"}];

  
  getCountOfProducts(){
    this.countOfProducts = this.restaurateurProvider.getCountOfProducts().subscribe(products => {
       console.log('La cant de productos es: ' + products)
       this.countOfProducts = products;
     });
    
  }

  getRegisteredClients(){
    this.restaurateurProvider.getClients().subscribe(clientsRegistered =>{
       console.log(clientsRegistered)
       this.clients = clientsRegistered; 
       this.getStatisticsFromClients();
       this.doughnutChartData =[this.countOfFemaleRegisteredClients, this.countOfMaleRegisteredClients];
      this.barChartDataset =[{data:[this.countOfFemaleChilds, this.countOfFemaleTeenagers, this.countOfYoungFemales, this.countOfFemaleAdults, this.countOfElderlyWomen], label:"Sexo Femenino"},
       {data:[this.countOfMaleChilds, this.countOfMaleTeenagers, this.countOfYoungMales, this.countOfMaleAdults, this.countOfElderlyMen], label:"Sexo Masculino"}];
      });
    
  }

  // Update all the variables to create the charts of clients
  getStatisticsFromClients(){
    for(var i = 0; i <this.clients.length ; i++){
      let currentClient = this.clients[i];
      let ageOfCurrentClient = this.getAgeOclient(currentClient.birthdate);
        if(currentClient.sex == 'F'){
       this.countOfFemaleRegisteredClients++;
       this.addItemToFemaleAgeCategories(ageOfCurrentClient);
      }else{
       this.countOfMaleRegisteredClients++;
       this.addItemToMaleAgeCategories(ageOfCurrentClient);
      }
    }

  }

  
  getAgeOclient(birthdate){
   var birthdateOfClient = moment(birthdate.substr(0,10));
   var currentDate = moment();
   var ageOfClient = currentDate.diff(birthdateOfClient,'years');
   return ageOfClient;
  }


  addItemToFemaleAgeCategories(age: number){
   if(age <= 14){
       this.countOfFemaleChilds++;
   }else{
       if(age <= 21){
           this.countOfFemaleTeenagers++;
       }else{
           if(age <= 35){
               this.countOfYoungFemales++;
           }else{
               if(age <= 60){
                   this.countOfFemaleAdults++;
               }else{
                   this.countOfElderlyWomen++;
               }
           }
       }
   } 
}

addItemToMaleAgeCategories(age:number){
    if(age <= 14){
        this.countOfMaleChilds++;
    }else{
        if(age <= 21){
            this.countOfMaleTeenagers++;
        }else{
            if(age <= 35){
                this.countOfYoungMales++;
            }else{
                if(age <= 60){
                    this.countOfMaleAdults++;
                }else{
                    this.countOfElderlyMen++;
                }
            }
        }
    }
}

  addProduct(){
    this.restaurateurProvider.addProduct(this.name, this.price, this.description)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
  }

  // FIXME Implementar 
  drawChartOfFinancesInWeek(){

  }

  // FIXME Implementar
  drawChartOfFinancesInMonth(){

  }

  // FIXME Implementar
  drawChartOfFinancesInDateRange(){

  }

  // FIXME Implementar
  drawLineChartOfRequestsInAWeek(){
    let currentDate = moment();
    let aWeekAgo = moment().subtract();

  }

  

}
