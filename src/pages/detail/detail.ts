import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Char } from '../../models/starlightdb/char';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  private chara_id: number;
  private avaterHost: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chara_id = navParams.get('item');
    console.log(this.chara_id);
  }

}
