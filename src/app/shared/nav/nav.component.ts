import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements DoCheck {
  searchTerm = '';
  isIssue = false;
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.seachTerm) this.searchTerm = params.seachTerm;
    })
  }
  ngDoCheck() {
    const currentUrl = window.location.pathname;

    if (currentUrl.match(/^\/issue\/(\d+)$/)) {
      this.isIssue = true;
    }
  }

  hideFormAndUser() {
    return this.isIssue
  }

  addNavigatedClass() {
    if(this.isIssue == true){
      return "navigated";
    }else {
      return "";
    }
  }

  search(term: string): void {
    if (term)
      this.router.navigateByUrl('/search/' + term)
  }

}
