import { Component, OnInit } from '@angular/core';
import { ShapeService } from '../../shared/service/shape.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class ImprintComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private shapeService: ShapeService) { }

  ngOnInit() {
    this.shapeService.getAllShape().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.shapeName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { shapeName: this.value };
    this.value = '';
    this.shapeService.addShape(this.tmp).pipe(
      mergeMap(() => this.shapeService.getAllShape()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.shapeService.updateShape(value._id, value).pipe(
      mergeMap(() => this.shapeService.getAllShape()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.shapeService.deleteShape(value._id).pipe(
      mergeMap(() => this.shapeService.getAllShape()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
