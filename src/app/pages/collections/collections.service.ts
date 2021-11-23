import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(
    private http:HttpClient
  ) { }

  getCollections(){
    return this.http.get<any>("assets/products.js");
  }
}
