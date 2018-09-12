import { Component, OnInit } from '@angular/core';
import { BrandNameService } from '../shared/service/brand-name.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-brandName',
  templateUrl: './brand-name.component.html',
  styleUrls: ['./brand-name.component.scss',
    '../../assets/icon/icofont/css/icofont.scss']
})
export class BrandNameComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private brandNameService: BrandNameService) { }

  ngOnInit() {
    this.brandNameService.getAllBrandName().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.brandName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { brandName: this.value };
    this.value = '';
    this.brandNameService.addBrandName(this.tmp).pipe(
      mergeMap(() => this.brandNameService.getAllBrandName()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.brandNameService.updateBrandName(value._id, value).pipe(
      mergeMap(() => this.brandNameService.getAllBrandName()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.brandNameService.deleteBrandName(value._id).pipe(
      mergeMap(() => this.brandNameService.getAllBrandName()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
