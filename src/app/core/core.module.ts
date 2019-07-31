// Angular Stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own Module
import { SharedModule } from '@shared/shared.module';

// Own Component - core
import { View1Component } from './view1/view1.component';

@NgModule({
  imports: [
    // Angular Stuff
    CommonModule,

    // Own Module
    SharedModule
  ],
  declarations: [
    // Own Component - core
    View1Component,
  ]
})
export class CoreModule { }
