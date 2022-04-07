import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../interface/interface.producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[] = [];

  
  
  constructor( private _productoService: ProductoService,
              private toastr: ToastrService) {}

  ngOnInit(): void {

    this.obtenerProductos();

  }

 obtenerProductos(){
   this._productoService.getProductos().subscribe(data => {
     console.log(data);
     this.listProductos = data;
   }, error => {
     console.log(error);
     
   })
 }


 eliminarProducto(id: any){

   this._productoService.deleteProducto(id).subscribe(data => {
     this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
     this.obtenerProductos();
     }, error => {
        console.log(error);
     })

 } 

 editarProducto(id: any){

 }





}
