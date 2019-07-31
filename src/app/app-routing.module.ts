// Anguler Stuff
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Own Module
import { View1Component } from '@core/view1/view1.component';

const routes: Routes = [
    { path: 'heroes', component: View1Component },
    { path: '**' , redirectTo: 'heroes'} // <-- DEFAULT FALLBACK
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}