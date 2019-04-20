import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Client} from '../../models/client';
import {RestaurateurApiProvider} from '../../providers/restaurateur-api/restaurateur-api';
import moment from 'moment';

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private restaurateurProvider: RestaurateurApiProvider) {
    this.getRegisteredClients();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
  }

}
