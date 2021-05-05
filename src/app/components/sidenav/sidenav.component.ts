import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  vulnerability = [
    // { name: 'Injections', path: 'injection' },
    { name: 'Broken Authentication', path: 'broken-auth' },
    { name: 'Sensitive Data Exposure', path: 'data-exposure' },
    //{ name: 'XML External Entities', path: 'xxe' },
    { name: 'Broken Access Control', path: 'broken-access/user' },
    { name: 'Security Misconfiguration', path: 'security-misconfig' },
    { name: 'Cross-Site Scripting', path: 'xss' },
    //{ name: 'Insecure Deserialization', path: 'insecure-deserial' },
    //{ name: 'Known Vulnerabilities', path: 'know-vuln' },
    { name: 'Insufficient Logging', path: 'insuff-log' },
  ];

  constructor() {
    console.log()
  }

  ngOnInit(): void {
  }

}
