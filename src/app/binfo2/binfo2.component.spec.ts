import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binfo2Component } from './binfo2.component';

describe('Binfo2Component', () => {
  let component: Binfo2Component;
  let fixture: ComponentFixture<Binfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binfo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
