import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionsDetailService {

  constructor(
    private http:HttpClient
  ) { }

  getCollections(){
    this.http.get<any>('assets/products.js');
  }
}
