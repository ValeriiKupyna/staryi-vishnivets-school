import OurSchool from '../pages/OurSchool/OurSchool';
import OurSchoolInfo from '../pages/OurSchool/pages/OurSchoolInfo/OurSchoolInfo';
import SchoolHistory from '../pages/OurSchool/pages/SchoolHistory/SchoolHistory';
import SchoolAchievements from '../pages/OurSchool/pages/SchoolAchievements/SchoolAchievements';
import {ROUTER_LABEL, ROUTER_ICONS} from "../constants";

export const OurSchoolRoute = {
    path: '/our-school',
    component: OurSchool,
    name: 'ur-school',
    label: ROUTER_LABEL.ourSchool,
    icon: ROUTER_ICONS.ourSchool,
    children: [
        {
            path: '',
            name: 'ur-school',
            component: OurSchoolInfo,
            icon: ROUTER_ICONS.ourSchool,
        },
        {
            path: 'history',
            name: 'history',
            component: SchoolHistory,
            label: ROUTER_LABEL.schoolHistory,
            icon: ROUTER_ICONS.schoolHistory,
        },
        {
            path: 'achievements',
            name: 'achievements',
            component: SchoolAchievements,
            label: ROUTER_LABEL.schoolAchievements,
            icon: ROUTER_ICONS.schoolAchievements,
        }
    ]

};

