import { API } from '../axios';

const url = '/home';

export const getHomeInfo = () => {
    return  API.get(`${url}`).then(({ data }) => data);
}

