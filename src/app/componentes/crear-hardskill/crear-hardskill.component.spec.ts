import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHardskillComponent } from './crear-hardskill.component';

describe('CrearHardskillComponent', () => {
  let component: CrearHardskillComponent;
  let fixture: ComponentFixture<CrearHardskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHardskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHardskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
