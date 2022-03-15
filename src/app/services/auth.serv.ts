import {Injectable} from '@angular/core';
import {User} from "./interfaces";
import {UserToReg} from "./user.reg";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
  }
)
export class AuthService {

  url_auth = "http://localhost:8080/auth";
  url_reg = "http://localhost:8080/reg"
  private token: string = '';

  login(user: User) {
    console.log(user.login)
    this.http.post(this.url_auth, user).subscribe(
      (res: any) => {
      if (res["token"] !== "bad") {
        this.setToken(res['token']);
        this.router.navigateByUrl("mainU");
      } else
        alert("Неправильный логин или пароль");
    },
    error => {
      alert("Что-то не так с сервером, попробуйте позже")
    }
  );

  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/start");
    this.token = '';
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  isTokenExpired(): boolean {
    return this.token !== '';
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  reg(user: UserToReg) {
    this.http.post(this.url_reg, user).subscribe(
      (res: any) => {
        if (res["token"] !== "bad") {
          if (res["token"] !== "connection error") {
            this.setToken(res['token']);
            this.router.navigateByUrl("main");
          } else {
            alert("Что-то не так с сервером, попробуйте позже");
          }
        } else
          alert("Пользователь с таким именем уже существует");
      },
      error => {
        alert("Что-то не так с сервером, попробуйте позже")
      }
    );
  }
}
