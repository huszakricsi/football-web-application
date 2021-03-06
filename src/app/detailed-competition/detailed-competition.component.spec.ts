import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCompetitionComponent } from './detailed-competition.component';

describe('DetailedCompetitionComponent', () => {
  let component: DetailedCompetitionComponent;
  let fixture: ComponentFixture<DetailedCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
