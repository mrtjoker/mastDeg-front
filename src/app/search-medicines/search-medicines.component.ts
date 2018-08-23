import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-search-medicines',
  templateUrl: './search-medicines.component.html',
  styleUrls: ['./search-medicines.component.scss',
    '../../assets/icon/icofont/css/icofont.scss',]
})
export class SearchMedicinesComponent implements OnInit {


  constructor() { }
  ngOnInit() {
  
  }

}
