import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologieComponent } from './pathologie.component';

describe('PathologieComponent', () => {
  let component: PathologieComponent;
  let fixture: ComponentFixture<PathologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
