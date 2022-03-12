import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RegistUserComponent } from './regist-user/regist-user.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import {StyleClassModule} from 'primeng/styleclass';
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {TabMenuModule} from 'primeng/tabmenu';
import {RouterModule, Router} from '@angular/router';
import {ModalModule} from "./modal/modal.module";

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AuthUserComponent,
    RegistUserComponent
  ],
  imports: [
    BrowserModule,
    StyleClassModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    TabMenuModule,
    RouterModule.forRoot([]),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
