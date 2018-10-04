import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 配給サービス
 */
export class DistributionsService extends Service {
    public async getDistributionsList(): Promise<factory.distributions.distribute.IDistributions[]> {
        return this.fetch({
            uri: '/distributions/list',
            method: 'GET',
            // qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return response.json();
        });
    }
}
