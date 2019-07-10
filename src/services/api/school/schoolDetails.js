import { API } from '../axios';

const url = '/details';

export const getSchoolDetails = () => {
    return  API.get(`${url}`).then(({ data }) => data);
};