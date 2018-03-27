import { Serializable } from '../base/serializable';

export class Card extends Serializable {

    constructor(
        public id?: number,
        public name?: string,
        public chara_id?: number,
        public rarity?: object,
        public attribute?: string,
        public title_flag?: number,
        public evolution_id?: number,
        public series_id?: number,
        public pose?: number,
        public place?: number,
        public evolution_type?: number,
        public album_id?: number,
        public open_story_id?: number,
        public open_dress_id?: number,
        public skill_id?: number,
        public leader_skill_id?: number,
        public grow_type?: number,
        public hp_min?: number,
        public vocal_min?: number,
        public dance_min?: number,
        public visual_min?: number,
        public hp_max?: number,
        public vocal_max?: number,
        public dance_max?: number,
        public visual_max?: number,
        public bonus_hp?: number,
        public bonus_vocal?: number,
        public bonus_dance?: number,
        public bonus_visual?: number,
        public solo_live?: number,
        public star_lesson_type?: number,
        public chara?: object,
        public has_spread?: boolean,
        public has_sign?: boolean,
        public name_only?: string,
        public title?: string,
        public skill?: object,
        public lead_skill?: object,
        public overall_min?: number,
        public overall_max?: number,
        public overall_bonus?: number,
        public valist?: object,
        public best_stat?: number,
        public spread_image_ref?: string,
        public card_image_ref?: string,
        public sprite_image_ref?: string,
        public icon_image_ref?: string
    ) {
        // 親コンストラクタの呼び出し
        super();
    }

}
