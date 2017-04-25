import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.css']
})
export class InterestListComponent implements OnInit {
  interestList: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.interestList.push({
      "router": "/simple",
      "title": "Simple interest"
    },
    {
      "router": "/compound",
      "title": "Compound interest"
    })
  }

}
