import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 興行区分サービス
 */
export class EntertainmentTypeService extends Service {
    /**
     * 興行区分グループ作成
     */
    public async getEntertainmentTypeList(
    ): Promise<factory.entertainmentType.IEntertainmentType> {
        return this.fetch({
            uri: '/entertainmentTypes/getEntertainmentTypeList',
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
