<template>
    <v-container text-xs-center>
        <v-layout row wrap>
            <v-flex>
                <h2 class="mb-3 primary--text">{{ achievements.title }}</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex>
                <p class="subheading mb-3 blue--text pre">{{ achievements.description }}</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex>
                <AchievementsList v-if="achievements.achievements && achievements.achievements.length" :achievements="achievements.achievements" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import AchievementsList from './components/AchievementsList/AchievementsList';

    const SchoolAchievements = {
        beforeMount() {
            this.$store.dispatch('getSchoolAchievements');
        },
        computed: {
            achievements() {
                return this.$store.getters.schoolAchievements;
            }
        },
        components: {
            AchievementsList
        }
    };

    export default SchoolAchievements;
</script>
