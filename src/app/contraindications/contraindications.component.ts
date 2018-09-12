import { Component, OnInit } from '@angular/core';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-contraindications',
  templateUrl: './contraindications.component.html',
  styleUrls: ['./contraindications.component.scss',
    '../../assets/icon/icofont/css/icofont.scss']
})
export class ContraindicationsComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private contraindicationsService: ContraindicationsService) { }

  ngOnInit() {
    this.contraindicationsService.getAllContraindications().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.contraindications.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { contraindications: this.value };
    this.value = '';
    this.contraindicationsService.addContraindications(this.tmp).pipe(
      mergeMap(() => this.contraindicationsService.getAllContraindications()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.contraindicationsService.updateContraindications(value._id, value).pipe(
      mergeMap(() => this.contraindicationsService.getAllContraindications()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.contraindicationsService.deleteContraindications(value._id).pipe(
      mergeMap(() => this.contraindicationsService.getAllContraindications()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
