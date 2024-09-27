import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: Producto[] = [];
  productosFiltrado: Producto [] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
   }

  ngOnInit() {
  
  }

  private cargarProductos() {

    return new Promise( ( resolve, reject ) => { 
      this.http.get('https://angular-html-4e9b5-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        this.producto = resp;
        this.cargando = false;
        resolve(resp);
      } )
    });
  }
  
  getProducto(id: string ) {
    return this.http.get(`https://angular-html-4e9b5-default-rtdb.firebaseio.com/productos/${ id }.json`);    
  }

  buscarProducto( termino: string) {

    if (this.productosFiltrado.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );
      });
    } else {
      this.filtrarProductos( termino );
    }
    
  }

  private filtrarProductos( termino: string ) {
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.producto.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0) {
        this.productosFiltrado.push( prod );
      }
    });
  } 


}
