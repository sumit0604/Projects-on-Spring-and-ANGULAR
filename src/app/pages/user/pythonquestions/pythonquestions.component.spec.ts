import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonquestionsComponent } from './pythonquestions.component';

describe('PythonquestionsComponent', () => {
  let component: PythonquestionsComponent;
  let fixture: ComponentFixture<PythonquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
