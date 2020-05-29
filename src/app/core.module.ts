import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SkipSelf, Optional } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AuthModule } from './auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './material.module';
import { AuthService } from './auth/auth.service';

const MODULES = [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MaterialModule
];

@NgModule({
  imports: [
    ...MODULES,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  exports: [
    ...MODULES,
    StoreModule,
    EffectsModule,
  ],
  providers: [
      AuthService
  ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
      }
    }
  }
