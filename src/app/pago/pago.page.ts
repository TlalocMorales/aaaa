import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  public metodoPago = {
    nombreTitular: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    codigoSeguridad: '',
  };

  public productosSeleccionados: any[] = [];

  private GOOGLE_PAY_API_KEY = 'AIzaSyAUG3yb6Ly8jwsPoQ9UOUvwEQbj_X2OqPs';

  constructor(private navCtrl: NavController, private carritoService: CarritoComprasService) { }

  ngOnInit() {
    const script = document.createElement('script');
    script.src = `https://pay.google.com/gp/p/js/pay.js?key=${this.GOOGLE_PAY_API_KEY}`;
    script.onload = () => {
      console.log('Google Pay library loaded');
    };
    document.body.appendChild(script);

    // Obtener los productos seleccionados del servicio del carrito de compras
    this.productosSeleccionados = this.carritoService.obtenerProductos();
  }

  realizarPago() {
    if (!this.metodoPago.nombreTitular || !this.metodoPago.numeroTarjeta || !this.metodoPago.fechaExpiracion || !this.metodoPago.codigoSeguridad) {
      console.log('Por favor, complete todos los campos.');
      return;
    }

    if (this.metodoPago.numeroTarjeta.length !== 16) {
      console.log('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    console.log('Se realizará el pago con los datos proporcionados:', this.metodoPago);
  }
}
