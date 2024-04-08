import { Injectable } from '@angular/core';
import { Product } from './product.models';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  private productos: any[] = [];

  constructor() { }

  guardarProductos(productos: Product[]) {
    this.productos = productos;
  }

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  obtenerProductos() {
    return this.productos;
  }

  vaciarCarrito() {
    this.productos = [];
  }
}
