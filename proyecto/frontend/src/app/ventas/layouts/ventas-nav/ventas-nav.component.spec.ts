import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasNavComponent } from './ventas-nav.component';

describe('VentasNavComponent', () => {
  let component: VentasNavComponent;
  let fixture: ComponentFixture<VentasNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
