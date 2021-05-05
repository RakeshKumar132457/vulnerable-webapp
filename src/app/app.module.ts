import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './modules/material/angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { InjectionComponent } from './components/vulns/injection/injection.component';
import { BrokenAuthComponent } from './components/vulns/broken-auth/broken-auth.component';
import { DataExposureComponent } from './components/vulns/data-exposure/data-exposure.component';
import { XxeComponent } from './components/vulns/xxe/xxe.component';
import { BrokenAccessComponent } from './components/vulns/broken-access/broken-access.component';
import { SecurityMisconfigComponent } from './components/vulns/security-misconfig/security-misconfig.component';
import { XssComponent } from './components/vulns/xss/xss.component';
import { InsecureDeserializationComponent } from './components/vulns/insecure-deserialization/insecure-deserialization.component';
import { KnownVulnComponent } from './components/vulns/known-vuln/known-vuln.component';
import { InsufficientLoggingComponent } from './components/vulns/insufficient-logging/insufficient-logging.component';
import { HomeComponent } from './components/home/home.component';
import { SecretDataComponent } from './components/vulns/data-exposure/secret-data/secret-data.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    LayoutComponent,
    InjectionComponent,
    BrokenAuthComponent,
    DataExposureComponent,
    XxeComponent,
    BrokenAccessComponent,
    SecurityMisconfigComponent,
    XssComponent,
    InsecureDeserializationComponent,
    KnownVulnComponent,
    InsufficientLoggingComponent,
    HomeComponent,
    SecretDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
