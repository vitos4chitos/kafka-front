import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})

export class AuthUserComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  ngOnInit() {
    this.items = [
      {label: 'Пользователь'},
      {label: 'Чиновник'}
    ];

    this.activeItem = this.items[0];
  }
}


