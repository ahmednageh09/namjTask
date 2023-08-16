import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/models/issue';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent {
  issues: Issue[] = [];
  constructor(private service: IssuesService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.seachTerm)
        this.issues = this.service.getIssueBySerachTerm(params.seachTerm);
      else
        this.issues = service.getAll();
    })

  }
}
