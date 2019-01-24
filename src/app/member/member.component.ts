import { Component, OnInit } from '@angular/core';
import { PostalAddressService } from './../postal-address.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  comment = 'Starting Member page';
  flag = true;
  day = new Date();
  memberObj = {
    id:'1',
    name:'Pururaj',
    occupation:'Enterpreneur'
  }
  array=['Pururaj', 'Anup',  'Santosh', 'Renjith'];
  constructor(private memberAddress: PostalAddressService) {
    this.comment='inside constructor';
  }
  ngOnInit() {
    console.log(this.memberAddress.address)
  }
  getMemberPostalAddress() {
    return JSON.stringify(this.memberAddress.address);
  }

}
