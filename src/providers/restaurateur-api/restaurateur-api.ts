//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {Restaurateur} from '../../models/restaurateur';
import {Client} from '../../models/client';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
//import {RequestOptions} from '@angular/common/http';


/*
  Generated class for the RestaurateurApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurateurApiProvider {

  constructor(public http: Http) {}

  // Obtener la cantidad de productos ofertados
  getCountOfProducts(): Observable<string>{
    return this.http.get('http://localhost:3000/api/countOfProducts').map(res => <string>res.text());
  }


  // Obtener los clientes registrados
  getClients(): Observable<Client[]>{
    return this.http.get('http://localhost:3000/api/clients').map(res => <Client[]>res.json());
  }

  // Agregar un producto a través de la API
  addProduct(name, price, description){
    let body = {
      "name": name,
      "price": price,
      "description": description   
    };

    //var headers = new Headers();
     //headers.append('Access-Control-Allow-Origin', '*');
    //headers.append("Accept", 'application/json');
    //headers.append('Content-Type', 'application/json'); 
    //const requestOptions = new RequestOptions({ headers: headers });
    

    return this.http.post('http://localhost:3000/api/products', body/*,requestOptions */);
    

  }
}
