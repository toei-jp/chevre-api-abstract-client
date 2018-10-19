import { CREATED, NO_CONTENT, OK } from 'http-status';

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
    public async createBoxOfficeType(params: {
        id: string;
        name: string;
    }): Promise<factory.boxOfficeType.IBoxOfficeType> {
        return this.fetch({
            uri: '/boxOfficeTypes/add',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
    public async searchBoxOfficeType(params: factory.boxOfficeType.ISearchConditions): Promise<{
        totalCount: number;
        data: factory.boxOfficeType.IBoxOfficeType[];
    }> {
        return this.fetch({
            uri: '/boxOfficeTypes/search',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                totalCount: Number(<string>response.headers.get('X-Total-Count')),
                data: await response.json()
            };
        });
    }
    public async updateBoxOfficeType(params: {
        id: string;
        name: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/boxOfficeTypes/${params.id}`,
            method: 'PUT',
            body: { name: params.name },
            expectedStatusCodes: [NO_CONTENT]
        });
    }
    public async deleteBoxOfficeType(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/boxOfficeTypes/${params.id}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
