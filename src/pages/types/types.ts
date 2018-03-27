import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Char } from '../../models/starlightdb/char';

@IonicPage()
@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {

  private char: Char;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.char = navParams.get('item');
    console.log(this.char);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesPage');
  }

}
