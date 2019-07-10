import {getHomeInfo} from "../services/api/home/home";
import {getSchoolDetails} from "../services/api/school/schoolDetails";
import {getSchoolAchievements} from "../services/api/school/schoolAchievements";


const school = {
    state: {
        welcomeData: {},
        history: {},
        emblem: {},
        mottoOfTheSchool: '',
        anthemOfUkraine: {},
        schoolAchievements: {}
    },
    getters: {
        welcome(state) {
            return state.welcomeData || [];
        },
        schoolInfo({emblem, mottoOfTheSchool, anthemOfUkraine}) {
            return {emblem, mottoOfTheSchool, anthemOfUkraine};
        },
        schoolHistory(state) {
            return state.history || {};
        },
        schoolAchievements(state) {
            return state.schoolAchievements || {};
        }
    },
    actions: {
        loadHomeData: async ({commit}) => {
            try {
                const homeData = await getHomeInfo();
                commit('setHomeData', homeData)
            } catch (e) {
                commit('setHomeData', [])
            }
        },
        loadSchoolDetails: async ({commit}) => {
            try {
                const details = await getSchoolDetails();
                commit('setDetails', details)
            } catch (e) {
                commit('setDetails', null)
            }
        },
        getSchoolAchievements: async ({commit}) => {
            try {
                const details = await getSchoolAchievements();
                commit('setAchievements', details)
            } catch (e) {
                commit('setAchievements', null)
            }
        },
    },
    mutations: {
        setHomeData(state, payload) {
            state.welcomeData = payload;
        },
        setDetails(state, payload = {}) {
            state.anthemOfUkraine = payload.anthemOfUkraine;
            state.emblem = payload.emblem;
            state.history = payload.history;
            state.mottoOfTheSchool = payload.mottoOfTheSchool;
        },
        setAchievements(state, payload) {
            state.schoolAchievements = payload;
        },
    }
};

export default school;
