import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../shared/service/color.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class ColorComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.colorService.getAllColor().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.colorName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { colorName: this.value };
    this.value = '';
    this.colorService.addColor(this.tmp).pipe(
      mergeMap(() => this.colorService.getAllColor()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.colorService.updateColor(value._id, value).pipe(
      mergeMap(() => this.colorService.getAllColor()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.colorService.deleteColor(value._id).pipe(
      mergeMap(() => this.colorService.getAllColor()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
