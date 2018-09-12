import { Component, OnInit } from '@angular/core';
import { DosageService } from '../shared/service/dosage.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-dosage',
  templateUrl: './dosage.component.html',
  styleUrls: ['./dosage.component.scss',
    '../../assets/icon/icofont/css/icofont.scss']
})
export class DosageComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private dosageService: DosageService) { }

  ngOnInit() {
    this.dosageService.getAllDosage().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.dosage.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { dosage: this.value };
    this.value = '';
    this.dosageService.addDosage(this.tmp).pipe(
      mergeMap(() => this.dosageService.getAllDosage()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.dosageService.updateDosage(value._id, value).pipe(
      mergeMap(() => this.dosageService.getAllDosage()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.dosageService.deleteDosage(value._id).pipe(
      mergeMap(() => this.dosageService.getAllDosage()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
