import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './containers/register/register.component';

export const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}
