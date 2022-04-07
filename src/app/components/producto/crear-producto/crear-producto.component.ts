import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interface/interface.producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  formProducto!: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  constructor(
    private formBuilder: FormBuilder,  
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute ) { 
  
  this.formProducto = this.formBuilder.group({

    producto: ['', [Validators.required, Validators.minLength(4)]],
    categoria: ['', [Validators.required, Validators.minLength(4)]],
    ubicacion: ['', [Validators.required, Validators.minLength(4)]],
    precio: ['', [Validators.required, Validators.minLength(4)]],

  })

  this.id = this.aRouter.snapshot.paramMap.get('id');

  }
  ngOnInit(): void {
    this.esEditar();
  }

  onSubmit(){


    const PRODCUTO : Producto = {

      nombre: this.formProducto.get('producto')?.value,
      categoria: this.formProducto.get('categoria')?.value,
      ubicacion: this.formProducto.get('ubicacion')?.value,
      precio: this.formProducto.get('precio')?.value,

    }


    this._productoService.crearProducto(PRODCUTO).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      
    })

        
}

esEditar(){
  if(this.id !== null){

    this.titulo = 'Editar producto';
    this._productoService.editarProducto(this.id).subscribe(data => {
      this.formProducto.setValue({

        producto: data.nombre,
        categoria: data.categoria,
        ubicacion: data.ubicacion,
        precio: data.precio,

      })
    })

  }
}



}