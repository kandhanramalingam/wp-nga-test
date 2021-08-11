import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FacadeService} from '../../shared/services/facade.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  input$: Observable<string>;
  output$: Observable<string>;
  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.input$ = this.facadeService.userInput$;
    this.output$ = this.facadeService.transferedOutput$;
  }

  addInput(key): void {
    this.facadeService.addInput(key);
  }
  removeInput(): void {
    this.facadeService.removeInput();
  }
}
