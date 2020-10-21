import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from 'src/app/services/search.service';

import { SearchContainerComponent } from './search-container.component';

import { By } from '@angular/platform-browser';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContainerComponent ],
      imports: [HttpClientTestingModule],
      providers: [SearchService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have get Search Random Meal function', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.getSearchMeal).toBeTruthy();
   });

//    it('searchInput should update value when input changes', async(() => {
//     const fixture = TestBed.createComponent(SearchContainerComponent);
//     expect(fixture.debugElement.nativeElement.value).toBeFalsy()
//     const el: HTMLInputElement = fixture.debugElement.query(By.css('search')).nativeElement;
//     const testValue = 'Venetian Duck Ragu';
//     el.value = testValue;
//     el.dispatchEvent(new Event('search'));
//     expect(fixture.componentInstance.handleSearch).toEqual(testValue);
// }));


});
