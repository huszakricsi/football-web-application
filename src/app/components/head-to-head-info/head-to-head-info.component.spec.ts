import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToHeadInfoComponent } from './head-to-head-info.component';

describe('HeadToHeadInfoComponent', () => {
  let component: HeadToHeadInfoComponent;
  let fixture: ComponentFixture<HeadToHeadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadToHeadInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadToHeadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
