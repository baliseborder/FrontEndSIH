import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpathologieComponent } from './listpathologie.component';

describe('ListpathologieComponent', () => {
  let component: ListpathologieComponent;
  let fixture: ComponentFixture<ListpathologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpathologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpathologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
