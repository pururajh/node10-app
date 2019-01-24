import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ColumnComponent } from '../column/column.component';
import { PostalAddressService } from './../postal-address.service';


declare var $;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  /**@Input() dataset;
  columns: ColumnComponent [] = [];
  query='';
  filterList;
  addColumn(column) {
    this.columns.push(column);
  }
  getData() {
    if(this.query!=='') {
        return this.filterList;
    } else {
      return this.dataset;
    }
  }
  filter() {
    this.filterList = this.dataset.filter(function(el){
      result ='';
      for (const key in el) {
        if(key!=='') {
           result+=el[key];
        }
      }
      return result.toLowerCase().indexOf(this.query.toLowerCase())>-1;
    }.bind(this));
  }*/
  DataArray: any = [];
  constructor(public prodAddress: PostalAddressService) {
    console.log('inside datatable component');
    this.DataArray = this.prodAddress.loadData();
    setTimeout(function (){
      $(function () {
        $('#dtable').DataTable();
      });
    }, 3000);
  }

  ngOnInit() {
  }
  /*getTabledata() {
   this.prodAddress.loadData();
  }*/
}


