import { Component, OnInit } from '@angular/core';
import { ImprintService } from '../../shared/service/imprint.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class ImprintComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private imprintService: ImprintService) { }

  ngOnInit() {
    this.imprintService.getAllImprint().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.imprintName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { imprintName: this.value };
    this.value = '';
    this.imprintService.addImprint(this.tmp).pipe(
      mergeMap(() => this.imprintService.getAllImprint()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.imprintService.updateImprint(value._id, value).pipe(
      mergeMap(() => this.imprintService.getAllImprint()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.imprintService.deleteImprint(value._id).pipe(
      mergeMap(() => this.imprintService.getAllImprint()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
