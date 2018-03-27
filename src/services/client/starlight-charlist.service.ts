import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hosts } from '../../constants/host';
import { Char } from '../../models/starlightdb/char';

@Injectable()
export class StarlightCharList {

    public chars: Array<Char> = [];

    constructor(private http: Http) { }

    public fetch(): void {
        const url = Hosts.STARLIGHTDB + '/api/v1/list/char_t';
        this.http.get(url).subscribe(data => {
            if (data.status !== 200) {
                console.log(`Web api connection failure. url=[${url}]`);
                return;
            }

            // json to object
            const res = data.json()['result'];

            for (const detail of res) {
                const char = new Char();
                char.fillFromJSON(detail);
                this.chars.push(char);
            }
        });
    }

}