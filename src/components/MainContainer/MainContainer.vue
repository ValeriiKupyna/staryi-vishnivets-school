<template>
    <v-app>
        <Header/>
        <v-content fluid class="gradient">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>


<script>
    import Header from '../Header/Header';

    const MainContainer = {
        data: () => ({
            drawer: null,

        }),
        components: {
            Header,
        }
    };

    export default MainContainer;
</script>

<style>
    .gradient {
        background: linear-gradient(to top, #dee9fb, #f3f9ff);
    }
</style>