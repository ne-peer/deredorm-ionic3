import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hosts } from '../../constants/host';
import { Card } from '../../models/starlightdb/card';

@Injectable()
export class StarlightCard {

    public cards: Array<Card> = [];

    constructor(private http: Http) { }

    /**
     * カード取得
     *
     * @param number name
     * @param string incProfile
     * @return void
     */
    public fetch(cardNo: number, isRemoveFirst: boolean) {
        return new Promise(resolve => {
            // request url
            const requestUrl = Hosts.STARLIGHTDB + '/api/v1/card_t/' + cardNo;

            // connection
            this.http.get(requestUrl).subscribe(data => {
                if (data.status !== 200) {
                    console.log(`Web api connection failure. url=[${requestUrl}]`);
                    return '';
                }

                // json to object
                const res = data.json()['result'];

                for (const oneCard of res) {
                    const card = new Card();
                    card.fillFromJSON(oneCard, false);
                    this.cards.push(card);
                }

                // 1件目は汎用的情報なのでオプションにより取り除く
                if (isRemoveFirst) {
                    this.cards.shift();
                }

                resolve(this.cards);
            });
        });
    }

}