import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserUpdateComponent } from './manage-user-update.component';

describe('ManageUserUpdateComponent', () => {
  let component: ManageUserUpdateComponent;
  let fixture: ComponentFixture<ManageUserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
