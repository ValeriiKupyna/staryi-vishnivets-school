import axios from 'axios';

import interceptors from './interceptors';

/**
 * create API with axios library
 */
export const API = create();

/**
 *  create a new instance of axios with a custom config
 */

function create() {
    const API = axios.create({baseURL: process.env.VUE_APP_BASE_URL });

    API.interceptors.request.use(
        interceptors.request.onSuccess,
        interceptors.request.onError
    );

    API.interceptors.response.use(
        interceptors.response.onSuccess,
        interceptors.response.onError
    );

    return API;
}
