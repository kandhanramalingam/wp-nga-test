import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/store';
import * as converterSeletors from '../../shared/store/converter.selectors';

@Component({
  selector: 'output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() inputValue: Observable<string>;
  @Input() outputValue: Observable<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
