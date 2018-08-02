import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { AdverseReactionsService } from '../../shared/service/adverse-reactions.service';
@Component({
  selector: 'app-adverseReactions',
  templateUrl: './adverse-reactions.component.html',
  styleUrls: ['./adverse-reactions.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class AdverseReactionsComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private adverseReactionsService: AdverseReactionsService) { }

  ngOnInit() {
    this.adverseReactionsService.getAllAdverseReactions().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.adverseReactionsName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { adverseReactionsName: this.value };
    this.value = '';
    this.adverseReactionsService.addAdverseReactions(this.tmp).pipe(
      mergeMap(() => this.adverseReactionsService.getAllAdverseReactions()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.adverseReactionsService.updateAdverseReactions(value._id, value).pipe(
      mergeMap(() => this.adverseReactionsService.getAllAdverseReactions()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.adverseReactionsService.deleteAdverseReactions(value._id).pipe(
      mergeMap(() => this.adverseReactionsService.getAllAdverseReactions()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
