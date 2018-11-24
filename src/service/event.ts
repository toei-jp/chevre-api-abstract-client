import * as chevre from '@chevre/api-abstract-client';
import { CREATED, OK } from 'http-status';

import * as factory from '../factory';

/**
 * イベントサービス
 */
export class EventService extends chevre.service.Event {
    /**
     * 複数の上映イベント作成
     */
    public async createMultipleScreeningEvent(
        params: factory.event.screeningEvent.IAttributes[]
    ): Promise<factory.event.screeningEvent.IEvent> {
        return this.fetch({
            uri: '/events/screeningEvent/saveMultiple',
            method: 'POST',
            body: { attributes: params },
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 券種の種別で集計API
     */
    public async countTicketTypePerEvent(
        params: factory.agregation.ICountTicketTypePerEventConditions
    ): Promise<factory.agregation.ICountTicketTypePerEventResult> {
        return this.fetch({
            uri: `/events/screeningEvent/countTicketTypePerEvent`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
