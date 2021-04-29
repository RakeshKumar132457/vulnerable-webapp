import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broken-auth',
  templateUrl: './broken-auth.component.html',
  styleUrls: ['./broken-auth.component.scss']
})
export class BrokenAuthComponent implements OnInit {
    hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
