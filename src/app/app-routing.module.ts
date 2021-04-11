import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokenAccessComponent } from './components/vulns/broken-access/broken-access.component';
import { BrokenAuthComponent } from './components/vulns/broken-auth/broken-auth.component';
import { DataExposureComponent } from './components/vulns/data-exposure/data-exposure.component';
import { InjectionComponent } from './components/vulns/injection/injection.component';
import { InsecureDeserializationComponent } from './components/vulns/insecure-deserialization/insecure-deserialization.component';
import { InsufficientLoggingComponent } from './components/vulns/insufficient-logging/insufficient-logging.component';
import { KnownVulnComponent } from './components/vulns/known-vuln/known-vuln.component';
import { SecurityMisconfigComponent } from './components/vulns/security-misconfig/security-misconfig.component';
import { XssComponent } from './components/vulns/xss/xss.component';
import { XxeComponent } from './components/vulns/xxe/xxe.component';

const routes: Routes = [
  { path: 'injection', component: InjectionComponent },
  { path: 'broken-auth', component: BrokenAuthComponent },
  { path: 'data-exposure', component: DataExposureComponent },
  { path: 'xee', component: XxeComponent },
  { path: 'broken-access', component: BrokenAccessComponent },
  { path: 'security-misconfig', component: SecurityMisconfigComponent },
  { path: 'xss', component: XssComponent },
  { path: 'insecure-deserial', component: InsecureDeserializationComponent },
  { path: 'know-vuln', component: KnownVulnComponent },
  { path: 'insuff-log', component: InsufficientLoggingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
