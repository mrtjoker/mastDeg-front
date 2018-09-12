import { Component, OnInit } from '@angular/core';
import { UsFDAService } from '../shared/service/us-fda.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-usFDA',
  templateUrl: './us-fda.component.html',
  styleUrls: ['./us-fda.component.scss',
    '../../assets/icon/icofont/css/icofont.scss']
})
export class UsFDAComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private usFDAService: UsFDAService) { }

  ngOnInit() {
    this.usFDAService.getAllUsFDA().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.usFDA.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { usFDA: this.value };
    this.value = '';
    this.usFDAService.addUsFDA(this.tmp).pipe(
      mergeMap(() => this.usFDAService.getAllUsFDA()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.usFDAService.updateUsFDA(value._id, value).pipe(
      mergeMap(() => this.usFDAService.getAllUsFDA()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.usFDAService.deleteUsFDA(value._id).pipe(
      mergeMap(() => this.usFDAService.getAllUsFDA()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
