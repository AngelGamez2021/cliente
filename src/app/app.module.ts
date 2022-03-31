import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ModalProductoComponent } from './components/modals/modal-producto/modal-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    ModalProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
