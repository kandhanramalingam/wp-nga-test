import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppState} from '../../shared/store';
import {Store} from '@ngrx/store';
import {Key} from '../../shared/models/common';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter();
  keys: Key[] = [
    {label: '1', type: 'txt', value: '1'},
    {label: '2', type: 'txt', value: '2'},
    {label: '3', type: 'txt', value: '3'},
    {label: '4', type: 'txt', value: '4'},
    {label: '5', type: 'txt', value: '5'},
    {label: '6', type: 'txt', value: '6'},
    {label: '7', type: 'txt', value: '7'},
    {label: '8', type: 'txt', value: '8'},
    {label: '9', type: 'txt', value: '9'},
    {label: '#', type: 'txt', value: '#'},
    {label: '0', type: 'txt', value: '0'},
    {label: '&#8592;', type: 'html', value: ''}
  ];
  constructor() {}

  ngOnInit(): void {
  }
  onKeyPressed(key: Key): void {
    if (key.value) {
      this.add.emit(key.value);
      return;
    }
    this.remove.emit();
  }
}
