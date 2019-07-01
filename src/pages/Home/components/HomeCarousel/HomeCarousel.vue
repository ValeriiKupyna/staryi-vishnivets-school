<template>
        <v-carousel height="100%">
            <v-carousel-item
                   active-class="carousel-item"
                    class="carousel-item"
                    v-for="(dataItem) in welcomeData"
                    :key="dataItem.id"
                    :src="dataItem.imgUrl"
            >
                <div class="description text-xs-center font-weight-medium primary--text">
                    <h3 class="display-3">{{ dataItem.title }}</h3>
                    <p class="display-1">{{ dataItem.text }}</p>
                </div>
            </v-carousel-item>
        </v-carousel>
</template>

<script>
     const HomeCarousel = {
         computed: {
             welcomeData() {
                 return this.$store.getters.welcome;
             }
         }
    };

    export default HomeCarousel;
</script>

<style scoped>
    .carousel-item {
        height: 100%
    }

    .description {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -20%);
        opacity: 0.7;
    }
</style>