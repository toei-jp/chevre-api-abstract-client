import * as chevre from '@chevre/api-abstract-client';
import { OK } from 'http-status';

import * as factory from '../factory';

/**
 * 券種サービス
 */
export class TicketTypeService extends chevre.service.TicketType {
    /**
     * 関連券種グループ
     */
    public async getTicketTypeGroupList(params: {
        ticketTypeId: string;
    }): Promise<factory.ticketType.ITicketType[]> {
        return this.fetch({
            uri: `/ticketTypes/getTicketTypeGroupList/${params.ticketTypeId}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return response.json();
        });
    }
}
