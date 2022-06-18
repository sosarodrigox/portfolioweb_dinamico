import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHardskillComponent } from './modificar-hardskill.component';

describe('ModificarHardskillComponent', () => {
  let component: ModificarHardskillComponent;
  let fixture: ComponentFixture<ModificarHardskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHardskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarHardskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
