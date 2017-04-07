import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincessComponent } from './princess.component';

describe('PrincessComponent', () => {
  let component: PrincessComponent;
  let fixture: ComponentFixture<PrincessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
