import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeUsersComponent } from './see-users.component';

describe('SeeUsersComponent', () => {
  let component: SeeUsersComponent;
  let fixture: ComponentFixture<SeeUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
