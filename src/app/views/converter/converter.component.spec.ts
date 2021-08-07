import {ConverterComponent} from './converter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {KeyboardComponent} from '../../components/keyboard/keyboard.component';
import {OutputComponent} from '../../components/output/output.component';
import {getMockStore, MockStore, provideMockStore} from '@ngrx/store/testing';
import {StoreModule} from '@ngrx/store';

describe('Converter Component', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;
  let store: MockStore;
  const initialState = {
    input: '',
    output: ''
  };
  beforeEach(() => {
    store = getMockStore({ initialState });
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterComponent, KeyboardComponent, OutputComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
