import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurroundingsComponent } from './surroundings.component';

describe('SurroundingsComponent', () => {
  let component: SurroundingsComponent;
  let fixture: ComponentFixture<SurroundingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurroundingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurroundingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
