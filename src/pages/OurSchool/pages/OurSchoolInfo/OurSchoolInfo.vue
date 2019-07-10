<template>
    <v-container text-xs-center>
        <v-layout row wrap>
            <v-flex sm4>
                <h2 class="mb-3 primary--text">{{ schoolInfo.emblem.title }}</h2>
                <v-img
                        :src="schoolInfo.emblem.imgUrl"
                        class="grey lighten-2"
                />
            </v-flex>
            <v-flex sm8>
                <p class="pre subheading font-weight-medium blue--text ">{{ schoolInfo.mottoOfTheSchool }}</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex>
                <h2 class="mb-3 primary--text">{{ schoolInfo.anthemOfUkraine.title }}</h2>
                <p class="pre font-weight-medium blue--text">{{ schoolInfo.anthemOfUkraine.text }}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const OurSchoolInfo = {
        computed: {
            schoolInfo() {
                return this.$store.getters.schoolInfo;
            }
        }
    };

    export default OurSchoolInfo;
</script>

<style>
    .pre {
        white-space: pre-wrap;
    }
</style>