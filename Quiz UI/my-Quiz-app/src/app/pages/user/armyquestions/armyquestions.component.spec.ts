import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyquestionsComponent } from './armyquestions.component';

describe('ArmyquestionsComponent', () => {
  let component: ArmyquestionsComponent;
  let fixture: ComponentFixture<ArmyquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmyquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
