import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModuleModule } from './angular-material-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModuleModule
  ],
  exports: [
    AngularMaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
