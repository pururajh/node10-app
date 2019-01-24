import { Component, Input,OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl , NgForm, NgControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app start';
  form;
  onSubmit= function(user){
    console.log(user);
  }
  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      language: new FormControl()
    });
  }
}
