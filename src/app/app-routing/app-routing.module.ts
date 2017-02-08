import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {LoansComponent} from '../loans/loans.component';
import {IssuesComponent} from "../issues/issues.component";

const appRoutes: Routes = [
  {path: 'issues', component: IssuesComponent},
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
