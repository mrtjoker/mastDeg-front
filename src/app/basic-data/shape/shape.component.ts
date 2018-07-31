import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class ShapeComponent implements OnInit {
  rowsBasic = [];
  fullScreenRow = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  rows = [];
  expanded = {};
  timeout: any;

  rowsFilter = [];
  tempFilter = [];
  table: any;
  constructor() {
    this.fetchFilterData((data) => {
      // cache our list
      this.tempFilter = [...data];

      // push our inital complete list
      this.rowsFilter = data;
    });
  }

  ngOnInit() {
  }

  fetchFilterData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempFilter.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
