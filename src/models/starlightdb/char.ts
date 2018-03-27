import { Serializable } from '../base/serializable';

export class Char extends Serializable {

    constructor(
        public chara_id?: number,
        public conventional?: string,
        public kanji_spaced?: string,
        public kana_spaced?: string,
        public cards?: Array<number>,
        public ref?: string,
    ) {
        // 親コンストラクタの呼び出し
        super();
    }

}
