import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, ControlContainer } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SortPipe } from './sort.array';
import { AppComponent } from './app.component';
import { PostalAddressService } from './postal-address.service';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ColumnComponent } from './column/column.component';


@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    ProductComponent,
    MemberComponent,
    DatatableComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
    {
      path: 'member',
      component: MemberComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: 'datatable',
      component: DatatableComponent
    },
    ])
  ],
  providers: [PostalAddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
