// registro.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  emailValid: boolean = true;
  passwordValid: boolean = true;
  confirmPasswordValid: boolean = true;
  nombreValid: boolean = true;

  constructor(private router: Router, private alertController: AlertController) {}

  async registrar() {
    if (this.camposValidos() && this.validarCorreo() && this.validarContraseña()) {
      // Las credenciales son válidas, redirige a la vista de menú (o a donde corresponda)
      this.router.navigateByUrl('/home');
    } else {
      // Muestra un mensaje de alerta indicando credenciales inválidas
      const alert = await this.alertController.create({
        header: 'Credenciales Inválidas',
        message: 'Por favor, revisa tus datos de registro.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  camposValidos(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.email.trim() !== '' && !/\s/.test(this.email) &&
      this.password.trim() !== '' &&
      this.confirmPassword.trim() !== ''
    );
  }
  

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|utcv\.edu\.mx|yahoo)\.com$/i;
    this.emailValid = emailRegex.test(this.email);
  }
  

  validatePassword() {
    this.passwordValid = /^(?=.*[A-Z]).{8,}$/.test(this.password);
  }

  validateConfirmPassword() {
    this.confirmPasswordValid = this.confirmPassword === this.password;
  }

  validateNombre() {
    this.nombreValid = this.nombre.trim() !== '';
  }

  validarCorreo(): boolean {
    // Utiliza la expresión regular para validar el formato del correo
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
  }

  validarContraseña(): boolean {
    // Agrega las validaciones adicionales de la contraseña según tus criterios
    return /^(?=.*[A-Z]).{8,}$/.test(this.password) && this.password === this.confirmPassword;
  }
}
