import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthUserComponent } from './auth-user/auth-user.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AuthUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
