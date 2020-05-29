import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
