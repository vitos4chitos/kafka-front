import {Injectable} from '@angular/core';
import {User} from "./interfaces";
import {UserToReg} from "./user.reg";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Dockument} from "./dock.reg"
import {DocumentPrior} from "./dock.prior";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
  }
)
export class AuthService {

  url_auth = "http://localhost:8080/auth";
  url_reg = "http://localhost:8080/signUp"
  url_dock = "http://localhost:8080/document/addDocument"
  url_prior = "http://localhost:8080/document/addDocumentPrior"
  user_id: number;
  private token: string = '';

  login(user: User) {
    console.log(user.login)
    this.http.post(this.url_auth, user).subscribe(
      (res: any) => {
        if (res["token"] !== "bad") {
          localStorage.setItem('token', user.password);
          localStorage.setItem('user', user.login);
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
    localStorage.removeItem("user");
    this.router.navigateByUrl("");
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
        if (res["token"] !== "err") {
          this.setToken("true");
          this.router.navigateByUrl("registdock");
        } else
          alert("Неправильный логин или пароль");
      },
      error => {
        alert("Что-то не так с сервером, попробуйте позже")
      }
    );
  }

  addDock(dock: Dockument) {
    console.log(dock.login)
    console.log(dock.date1)
    console.log(dock.date2)
    console.log(dock.name)
    this.http.post(this.url_dock, dock).subscribe(
      (res: any) => {
        if (res["token"] !== "err") {
          this.router.navigateByUrl("registdock");
        } else
          alert("Что-то ввели не то");
      },
      error => {
        alert("Что-то не так с сервером, попробуйте позже")
      }
    );
  }

  addPrior(dock: DocumentPrior){
    this.http.post(this.url_prior, dock).subscribe(
      (res: any) => {
        if (res["token"] !== "err") {
          this.router.navigateByUrl("registdock");
        } else
          alert("Что-то ввели не то");
      },
      error => {
        alert("Что-то не так с сервером, попробуйте позже")
      }
    );
  }

  checkToken(){
    let username;
    let user;
    let password;
    if (localStorage.getItem("user") == undefined || localStorage.getItem("token") == undefined) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.router.navigateByUrl("");
    } else {
      username = localStorage.getItem("user");
      password = localStorage.getItem("token");
      user = {
        login: username,
        password: password
      };
      this.http.post(this.url_auth, user).subscribe(
        (res: any) => {
          if (res["token"] !== "true") {
            this.router.navigateByUrl("");
          }
        },
        error => {
          alert("Что-то не так с сервером, попробуйте позже")
        }
      );
    }

    }
  }

