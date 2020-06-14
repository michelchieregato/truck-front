import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSavedPathsComponent } from './list-saved-paths.component';

describe('ListSavedPathsComponent', () => {
  let component: ListSavedPathsComponent;
  let fixture: ComponentFixture<ListSavedPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSavedPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSavedPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
