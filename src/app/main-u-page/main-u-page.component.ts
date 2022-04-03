import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.serv";
import {MainService} from "../services/main.serv";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-u-page',
  templateUrl: './main-u-page.component.html',
  styleUrls: ['./main-u-page.component.css']
})
export class MainUPageComponent implements OnInit {

  constructor(private auth: AuthService, private mainServer: MainService, private router: Router) { }

  ngOnInit(): void {
    this.auth.checkToken()
  }
  logOut(){
    this.auth.logout();
  }
  toD(){
    this.router.navigateByUrl("documents")
  }

  toQ(){
    this.router.navigateByUrl("queues")
  }

  toS(){
    this.router.navigateByUrl("shop")
  }

}
