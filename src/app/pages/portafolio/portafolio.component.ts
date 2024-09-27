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
    /*if (this.productos_idx.cargando = false) {
      this.cargarProductos(productosService);
    } else { */
      setTimeout(() => {
        this.cargarProductos(productosService)
      }, 5000);
    //}
  }

  cargarProductos(prodServ: ProductosService) {
    this.productos_idx = prodServ.producto;
    this.cargando = false;
    console.log(this.productos_idx);
    console.log(prodServ);    
  }

  ngOnInit() {
    

  }
}
