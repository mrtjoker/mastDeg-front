import { Component, OnInit } from '@angular/core';
import { PresentationPackService } from '../../shared/service/presentation-pack.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-presentationPack',
  templateUrl: './presentation-pack.component.html',
  styleUrls: ['./presentation-pack.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class PresentationPackComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private presentationPackService: PresentationPackService) { }

  ngOnInit() {
    this.presentationPackService.getAllPresentationPack().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.presentationPackName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { presentationPackName: this.value };
    this.value = '';
    this.presentationPackService.addPresentationPack(this.tmp).pipe(
      mergeMap(() => this.presentationPackService.getAllPresentationPack()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.presentationPackService.updatePresentationPack(value._id, value).pipe(
      mergeMap(() => this.presentationPackService.getAllPresentationPack()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.presentationPackService.deletePresentationPack(value._id).pipe(
      mergeMap(() => this.presentationPackService.getAllPresentationPack()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
