import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IssuesComponent } from './pages/issues/issues.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { IssueDetailsComponent } from './pages/issue-details/issue-details.component';



@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    CategoriesComponent,
    IssueDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
