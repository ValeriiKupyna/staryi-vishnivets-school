<template>
    <v-toolbar>
        <v-toolbar-title to="'/" class="pointer">{{ text.title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>


<script>
    import { routes } from '../../router';
    import { HEADER_TEXT } from './constants';

    const Header = {
        data() {
            return {
                text: HEADER_TEXT,
                routes,
            }
        }
    };

    export default Header;
</script>