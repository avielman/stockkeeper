import { Component } from '@angular/core';
import { Producto_idx } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  productos_idx: any = {};

  constructor( public productosService: ProductosService ) {
    if (this.productos_idx.cargando = false) {
      this.cargarProductos(productosService);
    } else {
      setTimeout(() => {
        this.cargarProductos(productosService)
      }, 10000);
    }
  }

  cargarProductos(prodServ: ProductosService) {
    this.productos_idx = prodServ;
    console.log(this.productos_idx);
    console.log(prodServ);
  }

  ngOnInit() {
    

  }
}
