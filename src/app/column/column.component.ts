import { Component, OnInit, Input } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() value;
  @Input() header;
  constructor() {
  }
  ngOnInit() {
  }

}
