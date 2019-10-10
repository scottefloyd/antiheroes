import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiheroSearchComponent } from './antihero-search.component';

describe('AntiheroSearchComponent', () => {
  let component: AntiheroSearchComponent;
  let fixture: ComponentFixture<AntiheroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiheroSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiheroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
