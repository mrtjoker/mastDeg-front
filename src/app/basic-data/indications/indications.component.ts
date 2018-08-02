import { Component, OnInit } from '@angular/core';
import { IndicationsService } from '../../shared/service/indications.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-indications',
  templateUrl: './indications.component.html',
  styleUrls: ['./indications.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class IndicationsComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private indicationsService: IndicationsService) { }

  ngOnInit() {
    this.indicationsService.getAllIndications().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.indicationsName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { indicationsName: this.value };
    this.value = '';
    this.indicationsService.addIndications(this.tmp).pipe(
      mergeMap(() => this.indicationsService.getAllIndications()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.indicationsService.updateIndications(value._id, value).pipe(
      mergeMap(() => this.indicationsService.getAllIndications()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.indicationsService.deleteIndications(value._id).pipe(
      mergeMap(() => this.indicationsService.getAllIndications()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
