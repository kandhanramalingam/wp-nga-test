import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppState} from '../../shared/store';
import {Store} from '@ngrx/store';
import {Key} from '../../shared/models/key';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter();
  keys: Key[] = [
    {label: '1', type: 'txt', action: this.addValue, value: '1'},
    {label: '2', type: 'txt', action: this.addValue, value: '2'},
    {label: '3', type: 'txt', action: this.addValue, value: '3'},
    {label: '4', type: 'txt', action: this.addValue, value: '4'},
    {label: '5', type: 'txt', action: this.addValue, value: '5'},
    {label: '6', type: 'txt', action: this.addValue, value: '6'},
    {label: '7', type: 'txt', action: this.addValue, value: '7'},
    {label: '8', type: 'txt', action: this.addValue, value: '8'},
    {label: '9', type: 'txt', action: this.addValue, value: '9'},
    {label: '#', type: 'txt', action: this.addValue, value: '#'},
    {label: '0', type: 'txt', action: this.addValue, value: '0'},
    {label: '&#8592;', type: 'html', action: this.removeValue, value: ''}
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
