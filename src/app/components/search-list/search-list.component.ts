import { Component, Input, OnInit } from '@angular/core';
import { SearchMeal } from '../../models/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() searchMeal: SearchMeal[];

  constructor() { }

  ngOnInit(): void { }

}
