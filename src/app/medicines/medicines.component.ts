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
// import { medicinesService } from '../../shared/service/medicines.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss',
    '../../assets/icon/icofont/css/icofont.scss']
})
export class MedicinesComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  private dataSub: Subscription = null;
  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  isDisabled = true;
  characters: Array<IOption>;
  timeLeft = 5;
  val: string;
  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  constructor(
    public selectOptionService: SelectOptionService,
    // private medicinesService: medicinesService
  ) { }

  ngOnInit() {
    this.runTimer();
    this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    // this.medicinesService.getAllmedicines().subscribe((results) => {
    //   this.tempFilter = [...results];
    //   this.rowsFilter = results;
    // });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.medicines.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    // this.tmp = { medicines: this.value };
    // this.value = '';
    // this.medicinesService.addmedicines(this.tmp).pipe(
    //   mergeMap(() => this.medicinesService.getAllmedicines()))
    //   .subscribe((results) => {
    //     this.tempFilter = [...results];
    //     this.rowsFilter = results;
    //   });
  }

  update(value) {
    // this.medicinesService.updatemedicines(value._id, value).pipe(
    //   mergeMap(() => this.medicinesService.getAllmedicines()))
    //   .subscribe((results) => {
    //     this.tempFilter = [...results];
    //     this.rowsFilter = results;
    //   });
  }

  delete(value) {
    // this.medicinesService.deletemedicines(value._id).pipe(
    //   mergeMap(() => this.medicinesService.getAllmedicines()))
    //   .subscribe((results) => {
    //     this.tempFilter = [...results];
    //     this.rowsFilter = results;
    //   });
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  ngOnDestroy() {
    if (this.dataSub !== null) { this.dataSub.unsubscribe(); }
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  insertVal() {
    console.log(this.val)
  }
}
