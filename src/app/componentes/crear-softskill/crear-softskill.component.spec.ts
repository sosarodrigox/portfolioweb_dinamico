import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSoftskillComponent } from './crear-softskill.component';

describe('CrearSoftskillComponent', () => {
  let component: CrearSoftskillComponent;
  let fixture: ComponentFixture<CrearSoftskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSoftskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSoftskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
