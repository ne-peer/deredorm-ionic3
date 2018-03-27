import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StarlightCharList } from '../../services/client/starlight-charlist.service';
import { Char } from '../../models/starlightdb/char';
import { Hosts } from '../../constants/host';
import { TypesPage } from '../types/types';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [StarlightCharList]
})
export class ListPage implements OnInit {

  selectedItem: any;
  items: Array<Char> = [];
  avaterHost: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private starlight: StarlightCharList,
    public loadingCtrl: LoadingController) {
      this.avaterHost = Hosts.STARLIGHT_AVATER;
  }

  ngOnInit() {
    (async () => {
      let loading = this.loadingCtrl.create({ content: '読み込み中...' });
      await loading.present();

      await this.starlight.fetch();
      this.items = await this.starlight.chars;

      await loading.dismiss();
    })();
  }

  itemTapped(event, item: Char) {
    this.navCtrl.push(TypesPage, {
      item: item
    });
  }

}
