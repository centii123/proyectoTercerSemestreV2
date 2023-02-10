/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Documento_compraComponent } from './documento_compra.component';

describe('Documento_compraComponent', () => {
  let component: Documento_compraComponent;
  let fixture: ComponentFixture<Documento_compraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Documento_compraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Documento_compraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
