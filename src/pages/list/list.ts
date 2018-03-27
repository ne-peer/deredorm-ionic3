import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StarlightCharList } from '../../services/client/starlight-charlist.service';
import { Char } from '../../models/starlightdb/char';
import { TypesPage } from '../types/types';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [StarlightCharList]
})
export class ListPage implements OnInit {

  selectedItem: any;
  items: Array<Char> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private starlight: StarlightCharList, public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ngOnInit() {
    (async () => {
      let loading = this.loadingCtrl.create({ content: 'ロード中...' });
      await loading.present();

      await this.starlight.fetch();
      this.items = await this.starlight.chars;

      await loading.dismiss();
    })();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TypesPage, {
      item: item
    });
  }

}
