import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { AdscripcionInstitucionalComponent } from './adscripcion-institucional/adscripcion-institucional.component';
import { AgregarDivulgacionCientificaComponent } from './agregar-divulgacion-cientifica/agregar-divulgacion-cientifica.component';
import { AgregarEstanciasComponent } from './agregar-estancias/agregar-estancias.component';
import { AgregarGradosAcademicosComponent } from './agregar-grados-academicos/agregar-grados-academicos.component';
import { AgregarImplementacionTecnologicaComponent } from './agregar-implementacion-tecnologica/agregar-implementacion-tecnologica.component';
import { AgregarLibrosComponent } from './agregar-libros/agregar-libros.component';
import { AgregarObtencionGradosComponent } from './agregar-obtencion-grados/agregar-obtencion-grados.component';
import { AgregarPatentesComponent } from './agregar-patentes/agregar-patentes.component';
import { AgregarRevistaComponent } from './agregar-revista/agregar-revista.component';
import { AgregarSNIComponent } from './agregar-sni/agregar-sni.component';
import { CoautorialibrosComponent } from './coautorialibros/coautorialibros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { DivulgacionCientificaComponent } from './divulgacion-cientifica/divulgacion-cientifica.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { GradosAcademicosComponent } from './grados-academicos/grados-academicos.component';
import { ImplementacionTecnologicaComponent } from './implementacion-tecnologica/implementacion-tecnologica.component';
import { IneComponent } from './ine/ine.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';
import { NacimientoComponent } from './nacimiento/nacimiento.component';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component';
import { ObtencionGradosComponent } from './obtencion-grados/obtencion-grados.component';
import { ParticipacionEnproyectosComponent } from './participacion-enproyectos/participacion-enproyectos.component';
import { PatentesComponent } from './patentes/patentes.component';
import { ProduccionCientificaComponent } from './produccion-cientifica/produccion-cientifica.component';
import { ProyectosInvestigacionComponent } from './proyectos-investigacion/proyectos-investigacion.component';
import { RevistaComponent } from './revista/revista.component';
import { SNIComponent } from './sni/sni.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { FormacionAcademicaComponent } from './formacion-academica/formacion-academica.component';
import { ProtectosDeInvestigacionComponent } from './protectos-de-investigacion/protectos-de-investigacion.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPassComponent },
  { path: 'adscripcion-institucional', component: AdscripcionInstitucionalComponent },
  { path: 'agregar-divulgacion-cientifica', component: AgregarDivulgacionCientificaComponent },
  { path: 'agregar-estancias', component: AgregarEstanciasComponent },
  { path: 'agregar-grados-academicos', component: AgregarGradosAcademicosComponent },
  { path: 'agregar-implementacion-tecnologica', component: AgregarImplementacionTecnologicaComponent },
  { path: 'agregar-libros', component: AgregarLibrosComponent },
  { path: 'agregar-obtencion-de-grados', component: AgregarObtencionGradosComponent },
  { path: 'agregar-patentes', component: AgregarPatentesComponent },
  { path: 'agregar-revistas-indexadas', component: AgregarRevistaComponent },
  { path: 'agregar-sni', component: AgregarSNIComponent },
  { path: 'coautoria-de-libros', component: CoautorialibrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'desarrollo', component:DesarrolloComponent },
  { path: 'divulgacion-cientifica', component: DivulgacionCientificaComponent },
  { path: 'estancias', component: EstanciasComponent },
  { path: 'datos-generales', component: GeneralDataComponent },
  { path: 'grados-academicos', component: GradosAcademicosComponent },
  { path: 'implementacion-tecnologica', component: ImplementacionTecnologicaComponent },
  { path: 'ine', component: IneComponent },
  { path: 'informacion-academica', component: InformacionAcademicaComponent },
  { path: 'lugar-nacimiento', component: NacimientoComponent },
  { path: 'nivel-academico', component: NivelAcademicoComponent },
  { path: 'obtencion-de-grados', component: ObtencionGradosComponent },
  { path: 'participacion-en-proyectos', component: ParticipacionEnproyectosComponent },
  { path: 'patentes', component: PatentesComponent },
  { path: 'produccion-cientifica', component:ProduccionCientificaComponent },
  { path: 'proyectos-investigacion', component: ProyectosInvestigacionComponent },
  { path: 'revistas', component: RevistaComponent },
  { path: 'sni', component: SNIComponent },
  {path: 'domicilio', component:DomicilioComponent},
  {path: 'formacion-academica', component:FormacionAcademicaComponent},
  {path:'proyectos-de-investigacion', component:ProtectosDeInvestigacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
