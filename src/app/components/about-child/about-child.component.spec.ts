import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildComponent } from './about-child.component';

describe('AboutChildComponent', () => {
  let component: AboutChildComponent;
  let fixture: ComponentFixture<AboutChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChildComponent]
    });
    fixture = TestBed.createComponent(AboutChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
