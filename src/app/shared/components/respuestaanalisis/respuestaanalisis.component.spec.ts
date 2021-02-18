import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaanalisisComponent } from './respuestaanalisis.component';

describe('RespuestaanalisisComponent', () => {
  let component: RespuestaanalisisComponent;
  let fixture: ComponentFixture<RespuestaanalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaanalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
