import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
    constructor(private http: HttpClient) {}
  getProduct(){
return this.http.get("https://69771cf15b9c0aed1e856323.mockapi.io/products")
}
getsingleProducts(id:string){
  return this.http.get(`https://69771cf15b9c0aed1e856323.mockapi.io/products/${id}`);
}
  
}
