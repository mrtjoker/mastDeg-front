import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/service/form.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class FormComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getAllForm().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.formName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { formName: this.value };
    this.value = '';
    this.formService.addForm(this.tmp).pipe(
      mergeMap(() => this.formService.getAllForm()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.formService.updateForm(value._id, value).pipe(
      mergeMap(() => this.formService.getAllForm()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.formService.deleteForm(value._id).pipe(
      mergeMap(() => this.formService.getAllForm()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
