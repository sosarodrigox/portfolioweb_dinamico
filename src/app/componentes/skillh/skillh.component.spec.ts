import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillhComponent } from './skillh.component';

describe('SkillhComponent', () => {
  let component: SkillhComponent;
  let fixture: ComponentFixture<SkillhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
