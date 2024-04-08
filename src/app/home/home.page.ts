import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';
  emailValid: boolean = true;
  passwordValid: boolean = true;

  constructor(private router: Router, private alertController: AlertController) {}

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|utcv\.edu\.mx|yahoo)\.com$/i;
    this.emailValid = emailRegex.test(this.email);
  }
  
  validatePassword() {
    this.passwordValid = /^(?=.*[A-Z]).{8,}$/.test(this.password);
  }

  async login(registering: boolean = false) {
    // Verifica si tanto el correo como la contraseña no están vacíos
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      // Realiza las validaciones adicionales
      if (this.emailValid && this.passwordValid) {
        // Las credenciales son válidas
        if (registering) {
          // Si se está registrando, redirige a la vista de registro
          this.router.navigateByUrl('/registro');
        } else {
          // Si no, redirige a la vista de menú
          this.router.navigateByUrl('/menu');
        }
      } else {
        // Muestra una alerta si las credenciales no son válidas (excepto al registrarse)
        if (!registering) {
          this.showAlert('Credenciales inválidas', 'Por favor, verifica tu correo y contraseña.');
        }
      }
    } else {
      // Muestra una alerta si hay campos vacíos
      this.showAlert('Campos vacíos', 'Por favor, completa todos los campos.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
