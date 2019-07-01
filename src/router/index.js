import VueRouter from 'vue-router';
import { HomeRoute } from './HomeRoute';
import { TeachersRoute } from './TeachersRoute';
import { OurSchoolRoute } from './OurSchoolRoute';

export const routes = [
    HomeRoute,
    TeachersRoute,
    OurSchoolRoute
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
})