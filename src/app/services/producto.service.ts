import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/interface.producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { }

  

  getProductos(): Observable <any> {
    return this.http.get(this.url);
  }

 deleteProducto(id: string): Observable <any>{
  return this.http.delete(this.url + id)
 }

 crearProducto(producto: Producto): Observable<any>{
   return this.http.post(this.url, producto);
 }

editarProducto(id: string): Observable<any>{
  return this.http.get(this.url + id);
}


}
 