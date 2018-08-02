import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../shared/service/presentation.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class PresentationComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  
  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
    this.presentationService.getAllPresentation().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.presentationName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { presentationName: this.value };
    this.value = '';
    this.presentationService.addPresentation(this.tmp).pipe(
      mergeMap(() => this.presentationService.getAllPresentation()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.presentationService.updatePresentation(value._id, value).pipe(
      mergeMap(() => this.presentationService.getAllPresentation()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.presentationService.deletePresentation(value._id).pipe(
      mergeMap(() => this.presentationService.getAllPresentation()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }
}
