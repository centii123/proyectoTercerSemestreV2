import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDocumentoComponent } from './ventas-documento.component';

describe('VentasDocumentoComponent', () => {
  let component: VentasDocumentoComponent;
  let fixture: ComponentFixture<VentasDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
