import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  productos_idx: Producto[] = [];
  cargando = true;  

  constructor( public productosService: ProductosService ) {
      setTimeout(() => {
        this.cargarProductos(productosService)
      }, 5000);
  }

  cargarProductos(prodServ: ProductosService) {
    this.productos_idx = prodServ.producto;
    this.cargando = false;
  }

  ngOnInit() {
    
  }
}
