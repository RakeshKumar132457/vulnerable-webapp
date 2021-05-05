import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-misconfig',
  templateUrl: './security-misconfig.component.html',
  styleUrls: ['./security-misconfig.component.scss']
})
export class SecurityMisconfigComponent implements OnInit {
  isHidden = true;

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
