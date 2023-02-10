import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasVentaComponent } from './ventas-venta.component';

describe('VentasVentaComponent', () => {
  let component: VentasVentaComponent;
  let fixture: ComponentFixture<VentasVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
