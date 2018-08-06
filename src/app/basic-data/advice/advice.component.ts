import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../../shared/service/advice.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class AdviceComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private adviceService: AdviceService) { }

  ngOnInit() {
    this.adviceService.getAllAdvice().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.advice.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { advice: this.value };
    this.value = '';
    this.adviceService.addAdvice(this.tmp).pipe(
      mergeMap(() => this.adviceService.getAllAdvice()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.adviceService.updateAdvice(value._id, value).pipe(
      mergeMap(() => this.adviceService.getAllAdvice()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.adviceService.deleteAdvice(value._id).pipe(
      mergeMap(() => this.adviceService.getAllAdvice()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
