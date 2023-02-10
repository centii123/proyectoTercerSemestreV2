import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasFooterComponent } from './ventas-footer.component';

describe('VentasFooterComponent', () => {
  let component: VentasFooterComponent;
  let fixture: ComponentFixture<VentasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
