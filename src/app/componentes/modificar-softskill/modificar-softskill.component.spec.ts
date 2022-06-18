import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSoftskillComponent } from './modificar-softskill.component';

describe('ModificarSoftskillComponent', () => {
  let component: ModificarSoftskillComponent;
  let fixture: ComponentFixture<ModificarSoftskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSoftskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSoftskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
