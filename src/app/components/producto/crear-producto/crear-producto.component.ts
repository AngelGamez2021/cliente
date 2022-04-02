import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interface/interface.producto';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  formProducto!: FormGroup;

  // messageError = {
  //   producto: {
  //     required: 'Producto requerido',
  //     minLength: 'Producto invalido',
  //   },
  //   categoria: {
  //     required: 'Categoria requerida',
  //     minLength: 'Categoria invalida',
  //   },
  //   uicacion: {
  //     required: 'Ubicacion requerida',
  //     minLength: 'Ubicacion invalida',
  //   },
  //   precio: {
  //     required: 'Precio requerido',
  //     minLength: 'Precio Invalido',

  //   },
  //  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { 
  
  this.formProducto = this.formBuilder.group({

    producto: ['', [Validators.required, Validators.minLength(4)]],
    categoria: ['', [Validators.required, Validators.minLength(4)]],
    ubicacion: ['', [Validators.required, Validators.minLength(4)]],
    precio: ['', [Validators.required, Validators.minLength(4)]],

  });

  }
  ngOnInit(): void {

    
  }


  onSubmit(){


    const PRODCUTO : Producto = {

      nombre: this.formProducto.get('producto')?.value,
      categoria: this.formProducto.get('categoria')?.value,
      ubicacion: this.formProducto.get('ubicacion')?.value,
      precio: this.formProducto.get('precio')?.value,

    }

    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado');
    this.router.navigate(['/']);

          }
  

}
