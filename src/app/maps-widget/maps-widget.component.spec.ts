import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsWidgetComponent } from './maps-widget.component';

describe('MapsWidgetComponent', () => {
  let component: MapsWidgetComponent;
  let fixture: ComponentFixture<MapsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
