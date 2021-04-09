import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPathologieComponent } from './edit-pathologie.component';

describe('EditPathologieComponent', () => {
  let component: EditPathologieComponent;
  let fixture: ComponentFixture<EditPathologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPathologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPathologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
