import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-med-certif',
  templateUrl: './med-certif.component.html',
  styleUrls: ['./med-certif.component.css']
})
export class MedCertifComponent implements OnInit {

  names: string[];
  selectedName: string = '';

  constructor() {
    this.names = [
      'Справка 1',
      'Справка 2',
      'Справка 3',
      'Справка 4',
      'Справка 5',
      'Справка 6'
    ];
    this.selectedName = this.names[0];
  }

  ngOnInit(): void {
  }

}
