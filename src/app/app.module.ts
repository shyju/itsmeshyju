import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ModalModule, BsModalRef } from "ngx-bootstrap";
import {AlertsModule} from 'angular-alert-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AlertsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
