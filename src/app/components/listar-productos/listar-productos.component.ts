import { Component, OnInit } from '@angular/core';
import { ModalProductoComponent } from '../modals/modal-producto/modal-producto.component';
// import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  constructor(
    // private modalService: NgbModal
    ) {}

  ngOnInit(): void {}

  openModal() {
    // const ref = this.modalService.open(ModalProductoComponent, {
    //   centered: true,
    // });
  }
}