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

        <v-list>
            <v-list-tile v-for="achievement in achievements.achievements" :key="achievement.id">
                <v-list-tile-title>{{ achievement.title }}</v-list-tile-title>
                <v-divider inset></v-divider>

                <v-list-tile-sub-title>asdasads</v-list-tile-sub-title>


<!--                <v-list-tile-content>-->
<!--                    <v-list-tile-title>{{ achievement.title }}</v-list-tile-title>-->
<!--                </v-list-tile-content>-->
                <!--                    <v-list-tile-sub-title>-->
                <!--                        <div v-for="achievementItem in achievement.achievements"-->
                <!--                             :key="achievementItem.id">-->
                <!--                            {{ achievementItem.id }}-->
                <!--                        </div>-->

                <!--                    </v-list-tile-sub-title>-->

                <!--                    <v-list>-->
                <!--                        <v-list-tile avatar v-for="achievementItem in achievement.achievements"-->
                <!--                                     :key="achievementItem.id">-->
                <!--                            <v-list-tile-content>-->
                <!--                                <h4>{{ achievementItem.title }}</h4>-->
                <!--                            </v-list-tile-content>-->
                <!--                        </v-list-tile>-->
                <!--                        -->
                <!--                    </v-list>-->
                <!--                </v-list-group>-->


            </v-list-tile>


        </v-list>
    </v-container>
</template>

<script>
    const SchoolAchievements = {
        computed: {
            achievements() {
                return this.$store.getters.schoolAchievements;
            }
        }
    };

    export default SchoolAchievements;
</script>

<style>
    /*.pre {*/
    /*    white-space: pre-wrap;*/
    /*}*/
</style>