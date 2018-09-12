import { Component, OnInit } from '@angular/core';
import { GenericNameService } from '../shared/service/generic-name.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-genericName',
  templateUrl: './generic-name.component.html',
  styleUrls: ['./generic-name.component.scss',
    '../../assets/icon/icofont/css/icofont.scss']
})
export class GenericNameComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private genericNameService: GenericNameService) { }

  ngOnInit() {
    this.genericNameService.getAllGenericName().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.genericName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { genericName: this.value };
    this.value = '';
    this.genericNameService.addGenericName(this.tmp).pipe(
      mergeMap(() => this.genericNameService.getAllGenericName()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.genericNameService.updateGenericName(value._id, value).pipe(
      mergeMap(() => this.genericNameService.getAllGenericName()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.genericNameService.deleteGenericName(value._id).pipe(
      mergeMap(() => this.genericNameService.getAllGenericName()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
