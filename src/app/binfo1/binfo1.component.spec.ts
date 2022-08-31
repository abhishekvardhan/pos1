import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binfo1Component } from './binfo1.component';

describe('Binfo1Component', () => {
  let component: Binfo1Component;
  let fixture: ComponentFixture<Binfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binfo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
