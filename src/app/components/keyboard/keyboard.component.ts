import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppState} from '../../shared/store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter();
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
