import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInfo } from './competition-info.component';

describe('CompetitionInfo', () => {
  let component: CompetitionInfo;
  let fixture: ComponentFixture<CompetitionInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionInfo ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
