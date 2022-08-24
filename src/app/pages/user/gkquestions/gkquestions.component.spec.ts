import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkquestionsComponent } from './gkquestions.component';

describe('GkquestionsComponent', () => {
  let component: GkquestionsComponent;
  let fixture: ComponentFixture<GkquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GkquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
