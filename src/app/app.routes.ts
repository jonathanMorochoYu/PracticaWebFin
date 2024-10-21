import { Routes } from '@angular/router';
import { AgregarCursoComponent } from './compontes/agregar-curso/agregar-curso.component';
import { ContactoComponent } from './compontes/contacto/contacto.component';
import { CursoComponent } from './compontes/curso/curso.component';
import { InicioComponent } from './compontes/inicio/inicio.component';

export const routes: Routes = [
    {path: "Inicio", component:InicioComponent},
    {path:"Curso", component:CursoComponent},
    {path:"Contacto", component:ContactoComponent},
    {path:"AgregarCursos", component:AgregarCursoComponent}
];
