import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarcomentarioComponent } from './enviarcomentario.component';

describe('EnviarcomentarioComponent', () => {
  let component: EnviarcomentarioComponent;
  let fixture: ComponentFixture<EnviarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarcomentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
