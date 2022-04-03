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
import {RouterModule, Routes} from '@angular/router';
import {ModalModule} from "./modal/modal.module";
import { RegistOfficcialComponent } from './regist-officcial/regist-officcial.component';
import { MainUPageComponent } from './main-u-page/main-u-page.component';
import { UserQueueComponent } from './user-queue/user-queue.component';
import { UserDocsComponent } from './user-docs/user-docs.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AddDocumentComponent} from "./modal/add-document/add-document.component";
import {MedCertifComponent} from "./modal/med-certif/med-certif.component";
import { UserDockComponent } from './user-dock/user-dock.component';
import { WhereICanBuyComponent } from './where-i-can-buy/where-i-can-buy.component';

const appRoutes: Routes = [
  {path: "", component: StartPageComponent},
  {path: "auth", component: AuthUserComponent},
  {path: "mainU", component: MainUPageComponent},
  {path: "registO", component: RegistOfficcialComponent},
  {path: "registU", component: RegistUserComponent},
  {path: "registdock", component: AddDocumentComponent},
  {path: "registprimes", component: MedCertifComponent},
  {path: "documents", component: UserDocsComponent},
  {path: "queues", component: UserQueueComponent},
  {path: "shop", component: ShopComponent},
  {path: "document", component: UserDockComponent},
  {path: "shops", component: WhereICanBuyComponent},
  {path: "**", component: PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AuthUserComponent,
    RegistUserComponent,
    RegistOfficcialComponent,
    MainUPageComponent,
    UserQueueComponent,
    UserDocsComponent,
    ShopComponent,
    PageNotFoundComponent,
    UserDockComponent,
    WhereICanBuyComponent
  ],
  imports: [
    BrowserModule,
    StyleClassModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    TabMenuModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
