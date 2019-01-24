import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { forEachChild } from 'typescript';

@Injectable()
export class PostalAddressService {
  address = {
    houseNo: '27',
    addressLine1: '18th Mail, 3rd B crooss',
    addressLine2: '',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '560076',
    country: 'India'
  }
//  data = [{
//      'DT_RowId': 'row_1',
//      'users': {
//        'first_name': 'Quynn',
//        'last_name': 'Contreras',
//        'phone': '1-971-977-4681',
//        'site': '1'
//      },
//      'sites': {
//        'name': 'Edinburgh'
//      }
//     },
//     {
//      'DT_RowId': 'row_7',
//      'users': {
//        'first_name': 'Xantha',
//        'last_name': 'George',
//        'phone': '1-106-884-4754',
//        'site': '1'
//      },
//      'sites': {
//        'name': 'Edinburgh'
//      }
//    },
//    {
//      'DT_RowId': 'row_13',
//      'users': {
//        'first_name': 'Lael',
//        'last_name': 'Kim',
//        'phone': '1-626-697-2194',
//        'site': '1'
//      },
//      'sites': {
//        'name': 'Edinburgh'
//      }
//    },
//    {
//      'DT_RowId': 'row_19',
//      'users': {
//        'first_name': 'Mona',
//        'last_name': 'Terry',
//        'phone': '1-443-179-7343',
//        'site': '1'
//      },
//      'sites': {
//        'name': 'Edinburgh'
//      }
//    },
//    {
//      'DT_RowId': 'row_25',
//      'users': {
//        'first_name': 'Ishmael',
//        'last_name': 'Crosby',
//        'phone': '1-307-243-2684',
//        'site': '1'
//      },
//      'sites': {
//        'name': 'Edinburgh'
//      }
//    }
//  ];
   data = [
     { 'first_name': 'Quynn',
        'last_name': 'Contreras',
        'phone': '1-971-977-4681',
        'site': '1'
     },
     { 'first_name': 'Xantha',
        'last_name': 'George',
        'phone': '1-106-884-4754',
        'site': '1'
    },
    { 'first_name': 'Lael',
        'last_name': 'Kim',
        'phone': '1-626-697-2194',
        'site': '1'
    },
    { 'first_name': 'Mona',
        'last_name': 'Terry',
        'phone': '1-443-179-7343',
        'site': '1'
    },
    { 'first_name': 'Ishmael',
        'last_name': 'Crosby',
        'phone': '1-307-243-2684',
        'site': '1'
    }
  ];
  constructor(public http: Http) {
  }
  loadData() {
///    const response = this.data.map(
///       (res) => (res).json()
///     ).subscribe(
///        (data) =>console.log(data)
///      );
      // return response;
//    console.log('inside postal address service..');
//    this.http.get('/src/data/data-table.json').subscribe(
//      (data) =>console.log (data)
//    )
    console.log(this.data);
    return this.data;
  }
  success () {
    return 'successful';
  }
}
