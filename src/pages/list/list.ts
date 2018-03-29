import {
  Component,
  OnInit,
  trigger,
  transition,
  animate,
  style
} from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { StarlightCharList } from "../../services/client/starlight-charlist.service";
import { Char } from "../../models/starlightdb/char";
import { Hosts } from "../../constants/host";
import { TypesPage } from "../types/types";

@Component({
  selector: "page-list",
  templateUrl: "list.html",
  providers: [StarlightCharList],
  animations: [
    trigger("flyInOut", [
      transition("void => *", [animate("0.1s ease-in"), style({ opacity: 1 })]),
      transition("* => void", [animate("0.1s ease-out"), style({ opacity: 0 })])
    ])
  ]
})
export class ListPage implements OnInit {
  selectedItem: any;
  itemsRepo: Array<Char> = [];
  items: Array<Char> = [];
  avaterHost: string;
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private starlight: StarlightCharList,
    public loadingCtrl: LoadingController
  ) {
    this.avaterHost = Hosts.STARLIGHT_AVATER;
  }

  ngOnInit() {
    (async () => {
      let loading = this.loadingCtrl.create({ content: "読み込み中..." });
      await loading.present();

      await this.starlight.fetch();
      this.itemsRepo = await this.starlight.chars;
      this.items = await this.starlight.chars;

      await loading.dismiss();
    })();
  }

  itemTapped(event, item: Char) {
    this.navCtrl.push(TypesPage, {
      item: item
    });
  }

  onInput(event) {
    this.items = this.itemsRepo;

    const q = this.searchQuery;
    console.log(q);
    if (q && q.trim() != "") {
      this.items = this.items.filter((item: Char) => {
        return item.kana_spaced.toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    }
  }
}
