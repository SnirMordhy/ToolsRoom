import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {LoansComponent} from '../loans/loans.component';

const appRoutes: Routes = [
  {path: 'issues', component: LoansComponent},
  {path: 'issueables', component: LoansComponent},
  {path: 'loans', component: LoansComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
