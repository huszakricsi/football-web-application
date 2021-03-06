import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsInfoComponent } from './odds-info.component';

describe('OddsInfoComponent', () => {
  let component: OddsInfoComponent;
  let fixture: ComponentFixture<OddsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
