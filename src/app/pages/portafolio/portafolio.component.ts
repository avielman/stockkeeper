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
  cargando = false;

  constructor( public productosService: ProductosService ) {
    /*if (this.productos_idx.cargando = false) {
      this.cargarProductos(productosService);
    } else { */
      setTimeout(() => {
        this.cargarProductos(productosService)
      }, 5000);
    //}
  }

  cargarProductos(prodServ: ProductosService) {
    this.productos_idx = prodServ;
    this.cargando = this.productos_idx.cargando;
    console.log(this.productos_idx);
    console.log(prodServ);
  }

  ngOnInit() {
    

  }
}
