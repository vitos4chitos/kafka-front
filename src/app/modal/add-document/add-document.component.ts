import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  names: string[];
  selectedName: string = '';

  constructor() {
    this.names = [
      'В',
      'Виктор',
      'Дмитрий',
      'Александр',
      'Владимир',
      'длиннаястрокадлиннаястрокадлиннаястрокадлиннаястрока'
    ];
  }

  ngOnInit(): void {
  }

}
