import { API } from '../axios';

const url = '/achievement';

export const getSchoolAchievements = () => {
    return  API.get(`${url}`).then(({ data }) => data);
};