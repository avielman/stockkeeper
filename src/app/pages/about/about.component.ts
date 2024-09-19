import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Equipo } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  equipo: any = {};

  constructor ( public InfoService: InfoPaginaService ) {
    this.equipo = InfoService;
  } 

}
