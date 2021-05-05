import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-broken-auth',
  templateUrl: './broken-auth.component.html',
  styleUrls: ['./broken-auth.component.scss']
})
export class BrokenAuthComponent implements OnInit {
  hide = true;
  formData;
  username = 'user';
  password = 'password';
  empId = '123';

  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      user: new FormControl(),
      password: new FormControl()
    });
  }
  onSubmit() {
    if (this.formData.value.user === this.username && this.formData.value.password === this.password) {
      alert("Login successfull")
    } else {
      if (this.formData.value.user != this.username && this.formData.value.password == this.password) {
        alert("Incorrect username");
      }
      else if (this.formData.value.password != this.password && this.formData.value.user == this.username) {
        alert("Incorrect password")
      } else {
        alert("Incorrect creds")
      }
    }
  }

  getCreds() {

  }

}
