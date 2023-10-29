import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRouting } from './pages.routing';
import { SharedModule } from "../shared/shared.module";
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRouting,
    SharedModule,
    MatSidenavModule
  ]
})
export class PagesModule { }
