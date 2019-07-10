<template>
    <HomeCarousel />
</template>


<script>
    import HomeCarousel from './components/HomeCarousel/HomeCarousel';

    const Home = {
        mounted() {
            this.$store.dispatch('loadHomeData');
        },
        components: {
            HomeCarousel,
        }
    };

    export default Home;
</script>