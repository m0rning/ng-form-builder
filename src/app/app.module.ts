import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '../auth/auth.module';

import { AppComponent } from './containers/app/app.component';
import { MainModule } from '../main/main';
import { AppHeaderComponent } from './components/app-header/app-header.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form-builder' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    MainModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
