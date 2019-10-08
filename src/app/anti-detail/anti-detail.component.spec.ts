import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiDetailComponent } from './anti-detail.component';

describe('AntiDetailComponent', () => {
  let component: AntiDetailComponent;
  let fixture: ComponentFixture<AntiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
