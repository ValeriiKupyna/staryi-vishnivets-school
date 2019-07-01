<template>
    <v-container text-xs-center>
        <v-layout row wrap>
            <v-flex>
                <h2 class="mb-3 primary--text">{{ schoolHistory.title }}</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex>
                <p class="subheading mb-3 blue--text pre">{{ schoolHistory.content }}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const SchoolHistory = {
        computed: {
            schoolHistory() {
                return this.$store.getters.schoolHistory;
            }
        }
    };

    export default SchoolHistory;
</script>

<style>
    .pre {
        white-space: pre-wrap;
    }
</style>