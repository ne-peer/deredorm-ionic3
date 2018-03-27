import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Char } from '../../models/starlightdb/char';
import { Hosts } from '../../constants/host';

@IonicPage()
@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {

  private char: Char;
  private avaterHost: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.char = navParams.get('item');
    this.avaterHost = Hosts.STARLIGHT_AVATER;
    console.log(this.char);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesPage');
  }

}
