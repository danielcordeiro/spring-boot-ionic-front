import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    /**Push impilha a pagina
    this.navCtrl.push('CategoriasPage')**/

    this.navCtrl.setRoot('CategoriasPage')
  }

}
