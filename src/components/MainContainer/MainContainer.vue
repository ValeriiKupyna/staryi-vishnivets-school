<template>
    <v-app>
        <Header />
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>


<script>
    import Header from '../Header/Header';

    const MainContainer = {
        data: () => ({
            drawer: null
        }),
        components: {
            Header,
        }
    };

    export default MainContainer;
</script>