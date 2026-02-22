import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singleview',
  imports: [],
  templateUrl: './singleview.html',
  styleUrl: './singleview.css',
})
export class Singleview {
   singleproduct:any;
  constructor(private route: ActivatedRoute, private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit(){//parameter mapping
    const productid=this.route.snapshot.paramMap.get('titileid')
  if(productid){this.apiservice.getsingleProducts(productid).subscribe((data)=>{
    this.singleproduct=data;
    this.cdr.detectChanges();
    console.log(data);
  });
}}

}
