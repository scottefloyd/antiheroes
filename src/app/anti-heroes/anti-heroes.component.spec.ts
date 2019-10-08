import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiheroesComponent } from './anti-heroes.component';

describe('AntiheroesComponent', () => {
  let component: AntiheroesComponent;
  let fixture: ComponentFixture<AntiheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
