import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscquestionsComponent } from './upscquestions.component';

describe('UpscquestionsComponent', () => {
  let component: UpscquestionsComponent;
  let fixture: ComponentFixture<UpscquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpscquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpscquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
