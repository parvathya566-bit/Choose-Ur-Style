import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {products:any[]=[];
constructor(private apiservice:Apiservice){}
ngOnInit(){
  this.apiservice.getProduct().subscribe((data:any)=>{this.products=data;})
}

}
