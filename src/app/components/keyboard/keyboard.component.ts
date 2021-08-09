import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppState} from '../../shared/store';
import {Store} from '@ngrx/store';
import {Common} from '../../shared/models/common';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter();
  keys: Common[] = [
    {label: '1', type: 'txt', action: this.addValue.bind(this), value: '1'},
    {label: '2', type: 'txt', action: this.addValue.bind(this), value: '2'},
    {label: '3', type: 'txt', action: this.addValue.bind(this), value: '3'},
    {label: '4', type: 'txt', action: this.addValue.bind(this), value: '4'},
    {label: '5', type: 'txt', action: this.addValue.bind(this), value: '5'},
    {label: '6', type: 'txt', action: this.addValue.bind(this), value: '6'},
    {label: '7', type: 'txt', action: this.addValue.bind(this), value: '7'},
    {label: '8', type: 'txt', action: this.addValue.bind(this), value: '8'},
    {label: '9', type: 'txt', action: this.addValue.bind(this), value: '9'},
    {label: '#', type: 'txt', action: this.addValue.bind(this), value: '#'},
    {label: '0', type: 'txt', action: this.addValue.bind(this), value: '0'},
    {label: '&#8592;', type: 'html', action: this.removeValue.bind(this), value: ''}
  ];
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
  }
  addValue(val: string): void {
    this.add.emit(val);
  }
  removeValue(): void {
    this.remove.emit();
  }
}
