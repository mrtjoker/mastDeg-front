import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { FactoryService } from '../../shared/service/factory.service';
@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class FactoryComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private factoryService: FactoryService) { }

  ngOnInit() {
    this.factoryService.getAllFactory().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.factoryName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { factoryName: this.value };
    this.value = '';
    this.factoryService.addFactory(this.tmp).pipe(
      mergeMap(() => this.factoryService.getAllFactory()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.factoryService.updateFactory(value._id, value).pipe(
      mergeMap(() => this.factoryService.getAllFactory()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.factoryService.deleteFactory(value._id).pipe(
      mergeMap(() => this.factoryService.getAllFactory()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
