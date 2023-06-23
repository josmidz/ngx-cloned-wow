import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxClonedWowsComponent } from './ngx-cloned-wows.component';

describe('NgxClonedWowsComponent', () => {
  let component: NgxClonedWowsComponent;
  let fixture: ComponentFixture<NgxClonedWowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxClonedWowsComponent]
    });
    fixture = TestBed.createComponent(NgxClonedWowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
