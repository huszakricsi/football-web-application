import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoreInfosInfoComponent } from './team-score-infos-info.component';

describe('TeamScoreInfosInfoComponent', () => {
  let component: TeamScoreInfosInfoComponent;
  let fixture: ComponentFixture<TeamScoreInfosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamScoreInfosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamScoreInfosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
