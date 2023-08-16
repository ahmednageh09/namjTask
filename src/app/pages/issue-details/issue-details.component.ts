import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/models/issue';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent {
  issue!: Issue;
  selectedProps: Set<number> = new Set();
  isButtonClicked: boolean = false;

  constructor( activatedRoute: ActivatedRoute, service: IssuesService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id) 
      this.issue = service.getIssueById(params.id);
    });
  }

  toggleSelection(index: number): void {
    if (this.selectedProps.has(index)) {
      this.selectedProps.delete(index);
    } else {
      this.selectedProps.add(index);
    }
  }

  isSelected(index: number): boolean {
    return this.selectedProps.has(index);
  }

    toggleButtonColor() {
        this.isButtonClicked = !this.isButtonClicked;
    }
}
