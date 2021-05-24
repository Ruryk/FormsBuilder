import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/auth-guard/auth-guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/shared/main/main.module').then(m => m.MainModule) },
  // {path: '', loadChildren: () => import('src/app/shared/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard]},
  { path: 'login', loadChildren: () => import('src/app/shared/login/login.module').then(m => m.LoginModule) },
  { path: 'registration', loadChildren: () => import('src/app/shared/registration/registration.module').then(m => m.RegistrationModule) },
  { path: '**', loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
