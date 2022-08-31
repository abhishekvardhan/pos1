import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binfo3Component } from './binfo3.component';

describe('Binfo3Component', () => {
  let component: Binfo3Component;
  let fixture: ComponentFixture<Binfo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binfo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
