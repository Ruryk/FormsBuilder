import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { FormStylesComponent } from 'src/app/components/form-styles/form-styles.component';

import { LoginComponent } from 'src/app/components/login/login.component';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { FormListComponent } from 'src/app/components/form-styles/form-list/form-list.component';
import { RowListComponent } from 'src/app/components/form-styles/row-list/row-list.component';
import { ElemListComponent } from 'src/app/components/form-styles/elem-list/elem-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { metaReducers, reducers } from 'src/app/reducers';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FormStylesComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    ErrorComponent,
    FormListComponent,
    RowListComponent,
    ElemListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    ReactiveComponentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
