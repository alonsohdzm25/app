import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { NacimientoComponent } from './nacimiento/nacimiento.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component';
import { InformacionAcademicaComponent } from './informacion-academica/informacion-academica.component';
import { CoautorialibrosComponent } from './coautorialibros/coautorialibros.component';
import { AgregarLibrosComponent } from './agregar-libros/agregar-libros.component';
import { ProyectosInvestigacionComponent } from './proyectos-investigacion/proyectos-investigacion.component';
import { PatentesComponent } from './patentes/patentes.component';
import { AgregarPatentesComponent } from './agregar-patentes/agregar-patentes.component';
import { RevistaComponent } from './revista/revista.component';
import { AgregarRevistaComponent } from './agregar-revista/agregar-revista.component';
import { DivulgacionCientificaComponent } from './divulgacion-cientifica/divulgacion-cientifica.component';
import { AgregarDivulgacionCientificaComponent } from './agregar-divulgacion-cientifica/agregar-divulgacion-cientifica.component';
import { ImplementacionTecnologicaComponent } from './implementacion-tecnologica/implementacion-tecnologica.component';
import { AgregarImplementacionTecnologicaComponent } from './agregar-implementacion-tecnologica/agregar-implementacion-tecnologica.component';
import { GradosAcademicosComponent } from './grados-academicos/grados-academicos.component';
import { AgregarGradosAcademicosComponent } from './agregar-grados-academicos/agregar-grados-academicos.component';
import { ObtencionGradosComponent } from './obtencion-grados/obtencion-grados.component';
import { AgregarObtencionGradosComponent } from './agregar-obtencion-grados/agregar-obtencion-grados.component';
import { SNIComponent } from './sni/sni.component';
import { AgregarSNIComponent } from './agregar-sni/agregar-sni.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { AgregarEstanciasComponent } from './agregar-estancias/agregar-estancias.component';
import { IneComponent } from './ine/ine.component';
import { AdscripcionInstitucionalComponent } from './adscripcion-institucional/adscripcion-institucional.component';
import { ParticipacionEnproyectosComponent } from './participacion-enproyectos/participacion-enproyectos.component';
import { ProduccionCientificaComponent } from './produccion-cientifica/produccion-cientifica.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { FormacionAcademicaComponent } from './formacion-academica/formacion-academica.component';
import { ProtectosDeInvestigacionComponent } from './protectos-de-investigacion/protectos-de-investigacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPassComponent,
    GeneralDataComponent,
    NacimientoComponent,
    ContactoComponent,
    DesarrolloComponent,
    NivelAcademicoComponent,
    InformacionAcademicaComponent,
    CoautorialibrosComponent,
    AgregarLibrosComponent,
    ProyectosInvestigacionComponent,
    PatentesComponent,
    AgregarPatentesComponent,
    RevistaComponent,
    AgregarRevistaComponent,
    DivulgacionCientificaComponent,
    AgregarDivulgacionCientificaComponent,
    ImplementacionTecnologicaComponent,
    AgregarImplementacionTecnologicaComponent,
    GradosAcademicosComponent,
    AgregarGradosAcademicosComponent,
    ObtencionGradosComponent,
    AgregarObtencionGradosComponent,
    SNIComponent,
    AgregarSNIComponent,
    EstanciasComponent,
    AgregarEstanciasComponent,
    IneComponent,
    AdscripcionInstitucionalComponent,
    ParticipacionEnproyectosComponent,
    ProduccionCientificaComponent,
    DomicilioComponent,
    FormacionAcademicaComponent,
    ProtectosDeInvestigacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
