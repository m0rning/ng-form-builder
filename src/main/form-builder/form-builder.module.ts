import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { FormBuilderComponent } from './containers/form-builder/form-builder.component';

export const ROUTES: Routes = [
  { path: '', component: FormBuilderComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FormBuilderComponent
  ]
})
export class FormBuilderModule {}
