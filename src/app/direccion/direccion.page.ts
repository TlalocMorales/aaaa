import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
})
export class DireccionPage {

  public direccion = {
    nombre: '',
    direccion: '',
    ciudad: '',
    codigopostal: '',
    pais: '',
    numerotelefonico: ''
  };

  constructor(private navCtrl: NavController, private router: Router) { }

  irAPago() {
    // Redirige a la página de pago y pasa los datos de la dirección como parte del estado de la ruta
    this.navCtrl.navigateForward('/pago', { state: { direccion: this.direccion } });
  }

}
