<template>
    <v-app>
        <MainContainer />
    </v-app>
</template>

<script>
    import './assets/styles/index.css';
    import MainContainer from './components/MainContainer/MainContainer';


    export default {
        name: 'App',
        components: {
            MainContainer,
        }
    }
</script>
