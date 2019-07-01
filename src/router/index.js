import VueRouter from 'vue-router';
import { HomeRoute } from './HomeRoute';

export const routes = [
    HomeRoute
];


export default new VueRouter({
    routes: routes,
    mode: 'history'
})