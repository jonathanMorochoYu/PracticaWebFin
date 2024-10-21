import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './compontes/inicio/inicio.component';
import { PiePaginaComponent } from './compontes/pie-pagina/pie-pagina.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InicioComponent,  PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Asegúrate de que sea styleUrls
})
export class AppComponent  {
  title = 'webMorocho';
  mostrarImagen: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.mostrarImagen = this.router.url === '/'; // Verifica si la ruta actual es la principal
    });
  }
}



