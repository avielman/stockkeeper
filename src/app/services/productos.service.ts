import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, Producto_idx } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: Producto[] = [];
  producto_idx: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(): void {

    this.http.get('https://angular-html-4e9b5-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: any) => {
      this.producto_idx = resp;
      this.cargando = false;
    } )
  }
}
