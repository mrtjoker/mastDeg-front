import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MimsService } from '../../shared/service/mims.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-mims',
  templateUrl: './mims.component.html',
  styleUrls: ['./mims.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MimsComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};

  constructor(private mimsService: MimsService) { }

  ngOnInit() {
    this.mimsService.getAllMims().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.mimsClass.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { mimsClass: this.value };
    this.value = '';
    this.mimsService.addMims(this.tmp).pipe(
      mergeMap(() => this.mimsService.getAllMims()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.mimsService.updateMims(value._id, value).pipe(
      mergeMap(() => this.mimsService.getAllMims()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.mimsService.deleteMims(value._id).pipe(
      mergeMap(() => this.mimsService.getAllMims()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

}
