import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensComponent } from './mens.component';

describe('MensComponent', () => {
  let component: MensComponent;
  let fixture: ComponentFixture<MensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
