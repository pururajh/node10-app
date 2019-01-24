import { Component, OnInit } from '@angular/core';
import { PostalAddressService } from './../postal-address.service';

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  paddress = '';
  pObjaddress = {};
  items=['angular','react','bootstrap'];
  newItem='';
  pushItem = function(){
    if(this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem= '';
    }
  }
  removeItem = function(index){
    this.items.splice(index, 1);
  }
  constructor(private prodAddress: PostalAddressService) {
  }

  ngOnInit() {
     console.log(this.prodAddress.address);
  }
  getProdPostalAddress() {
    this.pObjaddress = this.prodAddress.address;
    this.paddress = JSON.stringify(this.prodAddress.address);
    return this.paddress;
  }



}
