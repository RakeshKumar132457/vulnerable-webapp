import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { element } from 'protractor';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss']
})
export class XssComponent implements OnInit {
  dangerousUrl;
  trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit(): void {
  }

}
