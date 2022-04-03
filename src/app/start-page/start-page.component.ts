import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.serv";
import {MainService} from "../services/main.serv";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  url_auth = "http://localhost:8080/user/check";
  constructor(private auth: AuthService, private mainServer: MainService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick(){
    let username;
    let user;
    let password;
    if (localStorage.getItem("user") == undefined || localStorage.getItem("token") == undefined) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.router.navigateByUrl("auth");
    } else {
      username = localStorage.getItem("user");
      password = localStorage.getItem("token");
      user = {
        login: username,
        password: password
      };
      this.http.post(this.url_auth, user).subscribe(
        (res: any) => {
          if (res["token"] == "true") {
            this.router.navigateByUrl("mainU");
          }
          else{
            this.router.navigateByUrl("auth")
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }
        },
        error => {
          alert("Что-то не так с сервером, попробуйте позже")
        }
      );
    }
  }
}
