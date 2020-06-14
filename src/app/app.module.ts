import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { SliderComponent } from './components/pages/slider/slider.component';
import { SomosComponent } from './components/pages/somos/somos.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriasComponent } from './components/pages/categorias/categorias.component';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SomosComponent,
    CategoriasComponent,
    ClientesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
