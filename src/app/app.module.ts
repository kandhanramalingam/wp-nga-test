import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './views/converter/converter.component';
import {ReactiveFormsModule} from '@angular/forms';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { OutputComponent } from './components/output/output.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {userInputReducer} from './shared/store/converter.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ConverterEffects} from './shared/store/converter.effects';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    KeyboardComponent,
    OutputComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      StoreModule.forRoot({converter: userInputReducer}),
      StoreDevtoolsModule.instrument({maxAge: 25}),
      EffectsModule.forRoot([ConverterEffects])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
