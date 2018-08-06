import { Component, OnInit } from '@angular/core';
import { InteractionsService } from '../../shared/service/interactions.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class InteractionsComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.interactionsService.getAllInteractions().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.interactions.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { interactions: this.value };
    this.value = '';
    this.interactionsService.addInteractions(this.tmp).pipe(
      mergeMap(() => this.interactionsService.getAllInteractions()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.interactionsService.updateInteractions(value._id, value).pipe(
      mergeMap(() => this.interactionsService.getAllInteractions()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.interactionsService.deleteInteractions(value._id).pipe(
      mergeMap(() => this.interactionsService.getAllInteractions()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
