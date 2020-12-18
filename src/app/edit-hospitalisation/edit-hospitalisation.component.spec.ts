import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHospitalisationComponent } from './edit-hospitalisation.component';

describe('EditHospitalisationComponent', () => {
  let component: EditHospitalisationComponent;
  let fixture: ComponentFixture<EditHospitalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHospitalisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
