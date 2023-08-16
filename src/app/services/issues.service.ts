import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';
import { sample_cat, sample_issues } from '../data';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor() { }
  getAll(): Issue[] {
    return sample_issues;
  }

  getCategory(): Category[] {
    return sample_cat;
  }

  getIssueById(issueId: string): Issue {
    return this.getAll().find(issue => issue.id == issueId) ?? new Issue();
  }

  getIssueBySerachTerm(seachTerm: string) {
    return this.getAll().filter(issue => issue.admin.toLocaleLowerCase().includes(
      seachTerm.toLocaleLowerCase()) || issue.city.toLocaleLowerCase().includes(
        seachTerm.toLocaleLowerCase()))
  }

}
