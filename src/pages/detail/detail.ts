import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { StarlightCard } from "../../services/client/starlight-card.service";
import { Card } from "../../models/starlightdb/card";
import { Hosts } from "../../constants/host";

@IonicPage()
@Component({
  selector: "page-detail",
  templateUrl: "detail.html",
  providers: [StarlightCard]
})
export class DetailPage implements OnInit {
  public avaterHost: string;
  private chara_id: number;
  private card: Card;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private client: StarlightCard,
    private loadingCtrl: LoadingController
  ) {
    this.chara_id = navParams.get("item");
    console.log(this.chara_id);
    this.avaterHost = Hosts.STARLIGHT_AVATER;
  }

  ngOnInit() {
    (async () => {
      let loading = this.loadingCtrl.create({ content: "読み込み中...", enableBackdropDismiss: true});
      await loading.present();

      await this.client.fetch(this.chara_id, false);
      this.card = await this.client.cards.shift();
      console.log(this.card);

      await loading.dismiss();
    })();
  }

  existImage(): boolean {
    if (
      this.card !== undefined &&
      this.card.hasOwnProperty("spread_image_ref") &&
      this.card.spread_image_ref !== null
    ) {
      return true;
    }
    return false;
  }

  openImg(path) {
    window.open(this.avaterHost + "/spread/" + this.chara_id + ".png");
  }
}
