import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SelectOptionService } from '../shared/elements/select-option.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { mergeMap } from 'rxjs/operators';
import { MedicinesService } from '../shared/service/medicines.service';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss',
    '../../assets/icon/icofont/css/icofont.scss',
    '../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css']
})
export class MedicinesComponent implements OnInit {
  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  isDisabled = true;
  characters: Array<IOption>;
  timeLeft = 5;
  val: string;
  private dataSub: Subscription = null;
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  public temp = {
    name: '',
    type: '',
  }
  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe', 'อาเจียน'];

  constructor(public selectOptionService: SelectOptionService,
    private medicinesService: MedicinesService,
  ) { }

  ngOnInit() {
    // this.runTimer();
    // this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
    this.medicinesService.getAllMedicines().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.medicine.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { medicine: this.value };
    this.value = '';
    this.medicinesService.addMedicines(this.tmp).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.medicinesService.updateMedicines(value._id, value).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.medicinesService.deleteMedicines(value._id).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  save(event) {
    console.log(this.tmp);
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  ngOnDestroy() {
    if (this.dataSub !== null) { this.dataSub.unsubscribe(); }
  }

  // runTimer() {
  //   const timer = setInterval(() => {
  //     this.timeLeft -= 1;
  //     if (this.timeLeft === 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  // }

  insertVal() {
    console.log(this.val)
  }
}
