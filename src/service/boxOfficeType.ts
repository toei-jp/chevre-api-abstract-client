import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 興行区分サービス
 */
export class BoxOfficeTypeService extends Service {
    /**
     * 興行区分グループ作成
     */
    public async getBoxOfficeTypeList(
    ): Promise<factory.boxOfficeType.IBoxOfficeType> {
        return this.fetch({
            uri: '/boxOfficeTypes/getBoxOfficeTypeList',
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
