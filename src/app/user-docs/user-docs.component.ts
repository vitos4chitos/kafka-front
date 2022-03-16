import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.serv";
import {MainService} from "../services/main.serv";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {UserDoc} from "./user.doc";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-user-docs',
  templateUrl: './user-docs.component.html',
  styleUrls: ['./user-docs.component.css']
})
export class UserDocsComponent implements OnInit {
  rows: UserDoc[] = [];
  url = ""
  constructor(private auth: AuthService, private mainServer: MainService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }

  getExistingValues(username: string): Observable<UserDoc[]> {
    let params = new HttpParams().set("login", username);
    return this.http.get<any>(this.url, {params: params}).pipe(map(points => points.map(function (point:any) {
      return new UserDoc(point["name"], point["date1"], point["date2"], point["date3"]);
    })));
  }

}
