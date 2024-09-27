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

  constructor(private http: HttpClient) { 
    this.cargarProductos();
   }

  ngOnInit() {
  
  }

  private cargarProductos(): void {
    this.http.get('https://angular-html-4e9b5-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: any) => {
      this.producto = resp;
      this.cargando = false;
    } )
  }
  
  getProducto(id: string ) {
    return this.http.get(`https://angular-html-4e9b5-default-rtdb.firebaseio.com/productos/${ id }.json`);    
  }
}
