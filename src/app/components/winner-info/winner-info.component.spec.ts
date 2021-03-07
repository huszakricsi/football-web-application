import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerInfoComponent } from './winner-info.component';

describe('WinnerInfoComponent', () => {
  let component: WinnerInfoComponent;
  let fixture: ComponentFixture<WinnerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
