import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StarlightCharList } from '../../services/client/starlight-charlist.service';
import { Char } from '../../models/starlightdb/char';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [StarlightCharList]
})
export class ListPage implements OnInit {

  selectedItem: any;
  items: Array<Char> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private starlight: StarlightCharList) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ngOnInit() {
    (async () => {
      await this.starlight.fetch();
      this.items = await this.starlight.chars;
    })();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
