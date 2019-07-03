import Teachers from '../pages/Teachers/Teachers';
import { ROUTER_LABEL, ROUTER_ICONS } from '../constants';

export const TeachersRoute = {
    path: '/teachers',
    component: Teachers,
    name: 'teachers',
    label: ROUTER_LABEL.teachers,
    icon: ROUTER_ICONS.teachers,
};

