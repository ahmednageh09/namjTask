import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './pages/issues/issues.component';
import { IssueDetailsComponent } from './pages/issue-details/issue-details.component';

const routes: Routes = [
  { path: "", component: IssuesComponent },
  { path: "issue/:id", component: IssueDetailsComponent },
  { path: "search/:seachTerm", component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
