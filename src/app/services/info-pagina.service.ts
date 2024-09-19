import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina, Equipo } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  //equipo: any[] = [];
  equipo: Equipo = {};

  constructor( private http: HttpClient) {
    //leer el archivo json
    this.cargarEquipo();   
    this.cargarInfo();    
   }
   
  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-4e9b5-default-rtdb.firebaseio.com/equipo.json').subscribe( (resp: any) => {
      this.cargada = true;
      this.equipo = resp;
    })
  }
}
