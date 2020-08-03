import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage {

  constructor(private router: Router) { }

  goToPage(option){
    this.router.navigate(['/cultural-workshop'])
  }

}
