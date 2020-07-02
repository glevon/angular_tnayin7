import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDitailsComponent } from './users-ditails.component';

describe('UsersDitailsComponent', () => {
  let component: UsersDitailsComponent;
  let fixture: ComponentFixture<UsersDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
