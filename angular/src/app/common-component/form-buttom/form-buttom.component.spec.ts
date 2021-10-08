import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtomComponent } from './form-buttom.component';

describe('FormButtomComponent', () => {
  let component: FormButtomComponent;
  let fixture: ComponentFixture<FormButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
