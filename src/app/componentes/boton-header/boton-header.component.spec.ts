import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonHeaderComponent } from './boton-header.component';

describe('BotonHeaderComponent', () => {
  let component: BotonHeaderComponent;
  let fixture: ComponentFixture<BotonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
