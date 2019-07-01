import VueRouter from 'vue-router';
import { HomeRoute } from './HomeRoute';
import { TeachersRoute } from './TeachersRoute';

export const routes = [
    HomeRoute,
    TeachersRoute,
];


export default new VueRouter({
    routes: routes,
    mode: 'history'
})