import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeadToHeadInfoComponent } from './team-head-to-head-info.component';

describe('TeamHeadToHeadInfoComponent', () => {
  let component: TeamHeadToHeadInfoComponent;
  let fixture: ComponentFixture<TeamHeadToHeadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamHeadToHeadInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHeadToHeadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
