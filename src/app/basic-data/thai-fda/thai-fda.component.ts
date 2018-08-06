import { Component, OnInit } from '@angular/core';
import { ThaiFDAService } from '../../shared/service/thai-fda.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-thaiFDA',
  templateUrl: './thai-fda.component.html',
  styleUrls: ['./thai-fda.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class ThaiFDAComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value = {
    initialThaiFDA: '',
    thaiFDATH: '',
    thaiFDAEN: ''
  };
  public tmp = {
    initialThaiFDA: '',
    thaiFDATH: '',
    thaiFDAEN: ''
  };

  constructor(private thaiFDAService: ThaiFDAService) { }

  ngOnInit() {
    this.thaiFDAService.getAllThaiFDA().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
      console.log(results);
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.initialThaiFDA.toLowerCase().indexOf(val) !== -1 ||
        d.thaiFDATH.toLowerCase().indexOf(val) !== -1 ||
        d.thaiFDAEN.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = {
      initialThaiFDA: this.value.initialThaiFDA,
      thaiFDATH: this.value.thaiFDATH,
      thaiFDAEN: this.value.thaiFDAEN
    };
    this.value = {
      initialThaiFDA: '',
      thaiFDATH: '',
      thaiFDAEN: ''
    };
    this.thaiFDAService.addThaiFDA(this.tmp).pipe(
      mergeMap(() => this.thaiFDAService.getAllThaiFDA()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.thaiFDAService.updateThaiFDA(value._id, value).pipe(
      mergeMap(() => this.thaiFDAService.getAllThaiFDA()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.thaiFDAService.deleteThaiFDA(value._id).pipe(
      mergeMap(() => this.thaiFDAService.getAllThaiFDA()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
