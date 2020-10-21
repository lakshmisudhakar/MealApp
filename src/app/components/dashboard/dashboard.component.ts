import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchMeal } from '../../models/search.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  randomMealData: SearchMeal[];

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getMealData();
  }
// get dashboard data from serrchServices
  getMealData() {
    this.searchService.getRandomMeal().subscribe((data) => {
      this.randomMealData = data;
    });
 }

}
