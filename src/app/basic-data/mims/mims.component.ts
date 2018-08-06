import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SelectOptionService } from '../../shared/elements/select-option.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { MimsService } from '../../shared/service/mims.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-mims',
  templateUrl: './mims.component.html',
  styleUrls: ['./mims.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MimsComponent implements OnInit {
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
  // autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];

  constructor(public selectOptionService: SelectOptionService,
    private mimsService: MimsService) { }

  ngOnInit() {
    // this.runTimer();
    // this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
    this.mimsService.getAllMims().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.mimsClass.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { mimsClass: this.value };
    this.value = '';
    this.mimsService.addMims(this.tmp).pipe(
      mergeMap(() => this.mimsService.getAllMims()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.mimsService.updateMims(value._id, value).pipe(
      mergeMap(() => this.mimsService.getAllMims()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.mimsService.deleteMims(value._id).pipe(
      mergeMap(() => this.mimsService.getAllMims()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
  // ngOnDestroy() {
  //   if (this.dataSub !== null) { this.dataSub.unsubscribe(); }
  // }

  // runTimer() {
  //   const timer = setInterval(() => {
  //     this.timeLeft -= 1;
  //     if (this.timeLeft === 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  // }

  // insertVal(){
  //   console.log(this.val)
  // }
}
