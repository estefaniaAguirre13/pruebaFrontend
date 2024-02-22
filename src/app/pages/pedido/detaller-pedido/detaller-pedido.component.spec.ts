import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallerPedidoComponent } from './detaller-pedido.component';

describe('DetallerPedidoComponent', () => {
  let component: DetallerPedidoComponent;
  let fixture: ComponentFixture<DetallerPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallerPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
