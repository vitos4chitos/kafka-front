import {Component, OnInit} from '@angular/core';
import {UserDoc} from "../user-docs/user.doc";
import {SortEvent} from "primeng/api";


@Component({
  selector: 'app-main-official-page',
  templateUrl: './main-official-page.component.html',
  styleUrls: ['./main-official-page.component.css']
})


export class MainOfficialPageComponent implements OnInit {

  //todo
  customers: Customer[] = [];

  // constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProductsSmall().then(data => this.rows = data);
  }

  // customSort(event: SortEvent) {
  //   event.data.sort((data1, data2) => {
  //     let value1 = data1[event.field];
  //     let value2 = data2[event.field];
  //     let result = null;
  //
  //     if (value1 == null && value2 != null)
  //       result = -1;
  //     else if (value1 != null && value2 == null)
  //       result = 1;
  //     else if (value1 == null && value2 == null)
  //       result = 0;
  //     else if (typeof value1 === 'string' && typeof value2 === 'string')
  //       result = value1.localeCompare(value2);
  //     else
  //       result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
  //
  //     return (event.order * result);
  //   });
  // }

  //todo
  acceptCustomer() {

  }
  //todo
  logOut() {

  }
}
