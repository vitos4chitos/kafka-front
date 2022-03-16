import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.serv";
import {MainService} from "../services/main.serv";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private auth: AuthService, private mainServer: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    if(localStorage.getItem('user') == null){
      this.router.navigateByUrl('auth')
    }
    else
      this.router.navigateByUrl('mainU')
  }
}
