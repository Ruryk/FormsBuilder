import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from 'src/app/components/login/login.component';
import {RegistrationComponent} from 'src/app/components/registration/registration.component';
import {MainComponent} from 'src/app/components/main/main.component';
import {ErrorComponent} from 'src/app/shared/error/component/error.component';
import {AuthGuard} from 'src/app/auth-guard/auth-guard';

const routes: Routes = [
  {path: '', component: MainComponent},
  // { path: '', component: MainComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  // { path: '**', component: ErrorComponent }
  {path: '**', loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {
}
