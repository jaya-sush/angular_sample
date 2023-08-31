import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedproduct: any;

  constructor() {}

  ngOnInit(): void {
    }
    products=[
      {id:1, name:'Apple Watch', price:'26000', color:'Black', available:'Available', image:'/assets/products/IWatch.jpg', model:'GPS+Cellular(41mm)'},
      {id:2, name:'Samsung Smart Tv', price:'30000', color:'Black', available:'Available', image:'/assets/products/Samsung Tv.jpg', model:'Neo QLED 4'},
      {id:3, name:'LG Fully Automatic Washing Machine',  price:'36000', color:'White', available:'Available', image:'/assets/products/Washing Machine.jpg', model:'Ecobubble™ Top Load Washing Machine'}

    ]

    setProduct(product:any){
      this.selectedproduct = product;
      
    }

    sucessMessage(){
      window.alert('Payment done Sucessfully!!');
    }
    

}
