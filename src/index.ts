// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from './factory';

import { AuthClient } from './auth/authClient';

import { CreativeWorkService } from './service/creativeWork';
import { EventService } from './service/event';
import { PlaceService } from './service/place';
import { ReservationService } from './service/reservation';
import { TicketTypeService } from './service/ticketType';
import { CancelReservationTransactionService } from './service/transaction/cancelReservation';
import { ReserveTransactionService } from './service/transaction/reserve';
import * as transporters from './transporters';

export import factory = factory;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * 作品サービス
     */
    export class CreativeWork extends CreativeWorkService { }
    /**
     * イベントサービス
     */
    export class Event extends EventService { }
    /**
     * 場所サービス
     */
    export class Place extends PlaceService { }
    /**
     * 予約サービス
     */
    export class Reservation extends ReservationService { }
    /**
     * 券種サービス
     */
    export class TicketType extends TicketTypeService { }
    export namespace transaction {
        /**
         * 予約キャンセル取引サービス
         */
        export class CancelReservation extends CancelReservationTransactionService { }
        /**
         * 予約取引サービス
         */
        export class Reserve extends ReserveTransactionService { }
    }
}
