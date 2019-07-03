<template>
    <v-container text-xs-center>
        <v-list>
            <v-list-group
                    v-for="(achievement, idx) in achievements"
                    v-model="active[idx]"
                    :key="achievement.id"
                    no-action
            >
                <template v-slot:activator>
                    <v-list-tile-content class="pa-2">
                        <v-list-tile-title>
                            <h3>{{ achievement.title }}</h3>
                        </v-list-tile-title>

                        <v-list-tile-sub-title>
                            {{ achievement.date.from | date }} {{ achievement.date.to ? ' - ': '' }} {{
                            achievement.date.to ? ` - ${achievement.date.to}`: '' | date}}
                        </v-list-tile-sub-title>


                    </v-list-tile-content>
                </template>

                <AchievementDetailList :achievements="achievement.achievements"/>
            </v-list-group>
        </v-list>
    </v-container>
</template>

<script>
    import AchievementDetailList from './components/AchievementDetailList/AchievementDetailList'

    const AchievementsList = {
        props: ['achievements'],
        data() {
            return {
                active: [],
            }
        },
        filters: {
            date(value) {
                if (value) {
                    const date = new Date(value);
                    const day = date.getDay();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    return `${day}/${month}/${year}`
                }

                return value;
            }
        },
        components: {
            AchievementDetailList,
        }
    };

    export default AchievementsList;
</script>
