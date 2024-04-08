import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarritoComprasService } from '../carrito-compras.service';
import { Product } from '../product.models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage {

  public products: Product[] = [];
  public productsFounds: Product[] = [];
  public filter = [
    "Fertilizantes",
    "Herbicida",
    "Fungicida",
    "Bactericida",
    "Natural",
    "Granel",
    "Liquido"
  ];

  public productsCar: Product[] = [];
  total: number = 0;

  constructor(private navCtrl: NavController, private carritoService: CarritoComprasService) {
    // Aquí se inicializan los productos...

    //Fertilizantes
    this.products.push({
      id: 1,
      name: "Coca Cola",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fertilizantes" ,
      description: "Sabor Cola", 
      quantity: 5
    });

    //Herbicida
    this.products.push({
      id: 4,
      name: "Pinol",
      price: 18,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Herbicida",  
      description: "Limpiador para pisos",
      quantity: 5
    });

    //Fungicida
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fungicida",      
      description: "Muy rico",
      quantity: 5
    });

    //Bactericida
    this.products.push({
      id: 10,
      name: "Paracetamol",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Bactericida",  
      description: "Te alivias porque te alivias",
      quantity: 5
    });

    //Natural
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Natural",      
      description: "Muy rico",
      quantity: 5
    });

    //Granel
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Granel",      
      description: "Muy rico",
      quantity: 5
    });

    //Liquido
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Liquido",      
      description: "Muy rico",
      quantity: 5
    });

    this.productsFounds = this.products;

    this.calculateTotal();
  }

  public setCar(product: Product): void {
    const existingProduct = this.productsCar.find((p) => p.id === product.id);

    if (existingProduct) {
      // El producto ya existe en el carrito, aumenta la cantidad
      existingProduct.quantity++;
    } else {
      // El producto no está en el carrito, agrégalo con cantidad 1
      product.quantity = 1;
      this.productsCar.push(product);
    }
    this.calculateTotal();
  }

  public filterProducts(): void {
    console.log(this.filter);
    this.productsFounds = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      }
    );
  }

  decreaseQuantity(index: number): void {
    if (this.productsCar[index].quantity > 1) {
      this.productsCar[index].quantity--;
      this.calculateTotal();
    }
  }

  // Función para aumentar la cantidad de un producto
  increaseQuantity(index: number): void {
    this.productsCar[index].quantity++;
    this.calculateTotal();
  }

  // Función para quitar un producto del carrito
  removeProduct(index: number): void {
    this.productsCar.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    return this.total = this.productsCar.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  goBack(): void {
    this.navCtrl.navigateBack('/menu');
  }

  comprarProductos() {
    // Guarda los productos en el servicio del carrito de compras
    this.carritoService.guardarProductos(this.productsCar);

    // Redirige a la página de dirección
    this.navCtrl.navigateForward('/direccion');
  }  
}
