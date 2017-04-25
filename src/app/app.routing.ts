import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestListComponent } from './interest-list/interest-list.component';
import { SimpleComponent } from './interest-list/simple/simple.component';
import { CompoundComponent } from './interest-list/compound/compound.component';
const routes: Routes = [
  { path: '', component: InterestListComponent, children:[
      {path: "simple", component: SimpleComponent},
      {path: "compound", component: CompoundComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting { }

export const routedComponents = [AppRouting];