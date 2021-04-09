import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoanalisisComponent } from './resultadoanalisis.component';

describe('ResultadoanalisisComponent', () => {
  let component: ResultadoanalisisComponent;
  let fixture: ComponentFixture<ResultadoanalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoanalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
