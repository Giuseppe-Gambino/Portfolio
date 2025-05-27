import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticButtonComponent } from './magnetic-button.component';

describe('MagneticButtonComponent', () => {
  let component: MagneticButtonComponent;
  let fixture: ComponentFixture<MagneticButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagneticButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagneticButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
