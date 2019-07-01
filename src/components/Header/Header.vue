<template>
    <v-toolbar>
        <v-toolbar-title to="'/" class="pointer">
            <router-link tag="span" class="pointer" to="/">
                {{ text.title }}
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                    v-for="route in routes"
                    :key="route.name"
                    :to="route.path"
                    flat>{{ route.label }}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>


<script>
    import { routes } from '../../router';
    import { HEADER_TEXT } from '../../constants';

    const Header = {
        data() {
            return {
                text: HEADER_TEXT,
            }
        },
        computed: {
            routes() {
                return routes.filter(({ label }) => !!label)
            }
        }
    };

    export default Header;
</script>