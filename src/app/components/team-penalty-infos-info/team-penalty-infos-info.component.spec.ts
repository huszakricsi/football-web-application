import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPenaltyInfosInfoComponent } from './team-penalty-infos-info.component';

describe('TeamPenaltyInfosInfoComponent', () => {
  let component: TeamPenaltyInfosInfoComponent;
  let fixture: ComponentFixture<TeamPenaltyInfosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPenaltyInfosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPenaltyInfosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
