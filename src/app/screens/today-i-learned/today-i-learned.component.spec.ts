import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayILearnedComponent } from './today-i-learned.component';

describe('TodayILearnedComponent', () => {
  let component: TodayILearnedComponent;
  let fixture: ComponentFixture<TodayILearnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayILearnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayILearnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
