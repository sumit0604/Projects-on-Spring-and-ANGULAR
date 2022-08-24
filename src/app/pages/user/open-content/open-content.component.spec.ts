import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenContentComponent } from './open-content.component';

describe('OpenContentComponent', () => {
  let component: OpenContentComponent;
  let fixture: ComponentFixture<OpenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
