import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserMainComponent } from './manage-user-main.component';

describe('ManageUserMainComponent', () => {
  let component: ManageUserMainComponent;
  let fixture: ComponentFixture<ManageUserMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
