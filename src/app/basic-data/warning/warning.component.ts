import { Component, OnInit } from '@angular/core';
import { WarningService } from '../../shared/service/warning.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class WarningComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private warningService: WarningService) { }

  ngOnInit() {
    this.warningService.getAllWarning().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.warning.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { warning: this.value };
    this.value = '';
    this.warningService.addWarning(this.tmp).pipe(
      mergeMap(() => this.warningService.getAllWarning()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.warningService.updateWarning(value._id, value).pipe(
      mergeMap(() => this.warningService.getAllWarning()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.warningService.deleteWarning(value._id).pipe(
      mergeMap(() => this.warningService.getAllWarning()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
