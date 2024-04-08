import { Component, ViewChild } from '@angular/core';
import { IonMenu, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  @ViewChild(IonMenu) menu!: IonMenu;

  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
    // Cerrar el menú al abrir la vista
    this.menuController.close();
  }

  // Cerrar el menú al hacer clic en cualquier parte de la página
  closeMenu() {
    this.menuController.close();
  }
}
