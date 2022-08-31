import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binfo4Component } from './binfo4.component';

describe('Binfo4Component', () => {
  let component: Binfo4Component;
  let fixture: ComponentFixture<Binfo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binfo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binfo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
