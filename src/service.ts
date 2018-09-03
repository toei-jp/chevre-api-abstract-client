import * as qs from 'qs';

import { AuthClient } from './auth/authClient';
import { DefaultTransporter, Transporter } from './transporters';

/**
 * service constructor options
 */
export interface IOptions {
    /**
     * API endpoint
     * @example
     * http://localhost:8081
     */
    endpoint: string;
    /**
     * OAuth2 client object
     */
    auth?: AuthClient;
    /**
     * transporter object
     */
    transporter?: Transporter;
}

export interface IFetchOptions {
    uri: string;
    form?: any;
    qs?: any;
    method: string;
    headers?: {
        [key: string]: any;
    };
    body?: any;
    expectedStatusCodes: number[];
}

/**
 * base service class
 */
export class Service {
    public options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
    }

    /**
     * Create and send request to API
     */
    public async fetch(options: IFetchOptions) {
        const defaultOptions = {
            headers: {},
            method: 'GET',
            ...options
        };

        const baseUrl = this.options.endpoint;
        let url = `${baseUrl}${defaultOptions.uri}`;

        const querystrings = qs.stringify(defaultOptions.qs);
        url += (querystrings.length > 0) ? `?${querystrings}` : '';

        const headers = {
            ...{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            ...defaultOptions.headers
        };

        const fetchOptions = {
            method: defaultOptions.method,
            headers: headers,
            body: JSON.stringify(defaultOptions.body)
        };

        // create request (using authClient or otherwise and return request obj)
        if (this.options.auth !== undefined) {
            return this.options.auth.fetch(url, fetchOptions, defaultOptions.expectedStatusCodes);
        } else {
            const transporter =
                (this.options.transporter !== undefined)
                    ? this.options.transporter
                    : new DefaultTransporter(defaultOptions.expectedStatusCodes);

            return transporter.fetch(url, fetchOptions);
        }
    }
}
