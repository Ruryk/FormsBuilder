import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';
import { FormStylesComponent } from './components/form-styles/form-styles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/form-elements/button/button.component';
import { SelectComponent } from './components/form-elements/select/select.component';
import { InputComponent } from './components/form-elements/input/input.component';
import { CheckboxComponent } from './components/form-elements/checkbox/checkbox.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './reducers';
import { TextareaComponent } from './components/form-elements/textarea/textarea.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { FormListComponent } from './components/form-styles/form-list/form-list.component';
import { RowListComponent } from './components/form-styles/row-list/row-list.component';
import { ElemListComponent } from './components/form-styles/elem-list/elem-list.component';
import { BuilderElemComponent } from './components/form-builder/builder-elem/builder-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormElementsComponent,
    FormStylesComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    TextareaComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    ErrorComponent,
    FormListComponent,
    RowListComponent,
    ElemListComponent,
    BuilderElemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    DragDropModule,
    HttpClientModule,
    MatGridListModule,
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
