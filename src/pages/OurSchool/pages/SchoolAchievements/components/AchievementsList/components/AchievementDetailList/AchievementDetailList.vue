<template>
    <v-list>
        <v-list-tile v-for="achievement in achievements" :key="achievement.id">
            <v-list-tile-title>{{ achievement.title }}</v-list-tile-title>

            <v-list-tile-sub-title>
                {{ achievement.description }}

            </v-list-tile-sub-title>


        </v-list-tile>

    </v-list>
</template>

<script>
    const AchievementDetailList = {
        props: ['achievements']
    };

    export default AchievementDetailList;
</script>
