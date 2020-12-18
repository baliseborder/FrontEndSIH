import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHOPComponent } from './services-hop.component';

describe('ServicesHOPComponent', () => {
  let component: ServicesHOPComponent;
  let fixture: ComponentFixture<ServicesHOPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesHOPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesHOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
