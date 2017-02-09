import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {LoansComponent} from '../loans/loans.component';
import {IssuesComponent} from "../issues/issues.component";
import {IssuablesListComponent} from "../issuables-list/issuables-list.component";

const appRoutes: Routes = [
  {path: 'issues', component: IssuesComponent},
  {path: 'issueables', component: IssuablesListComponent},
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
