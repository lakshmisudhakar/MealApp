import { AfterViewInit, Component, ElementRef, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {

  @ViewChild('input', {static: false}) inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void { }
  // search input event emit value to container component
  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value: string) => value.length > 3),
        map((value) => value)
      )
      .subscribe(value => {
        this.search.emit(value);
      });
  }

}
