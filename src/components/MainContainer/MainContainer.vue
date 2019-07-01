<template>
    <v-app>
        <Header/>
        <v-content fluid>
            <router-view></router-view>
        </v-content>
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