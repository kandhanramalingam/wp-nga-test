import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

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
