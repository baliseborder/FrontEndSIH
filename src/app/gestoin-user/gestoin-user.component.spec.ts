import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoinUserComponent } from './gestoin-user.component';

describe('GestoinUserComponent', () => {
  let component: GestoinUserComponent;
  let fixture: ComponentFixture<GestoinUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoinUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoinUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
