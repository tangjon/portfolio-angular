import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmcdComponent } from './qmcd.component';

describe('QmcdComponent', () => {
  let component: QmcdComponent;
  let fixture: ComponentFixture<QmcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
