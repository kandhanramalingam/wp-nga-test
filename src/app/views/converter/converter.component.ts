import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/store';
import {Observable} from 'rxjs';
import {selectUserInput} from '../../shared/store/converter.selectors';
import * as converterActions from '../../shared/store/converter.actions';
import * as converterSeletors from '../../shared/store/converter.selectors';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  input$: Observable<string>;
  output$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.input$ = this.store.pipe(select(converterSeletors.selectUserInput));
    this.output$ = this.store.pipe(select(converterSeletors.selectConvertedOutput));
  }

  addInput(key): void {
    this.store.dispatch(converterActions.addUserInput({data: key}));
  }
  removeInput(): void {
    this.store.dispatch(converterActions.removeUserInput());
  }
}
