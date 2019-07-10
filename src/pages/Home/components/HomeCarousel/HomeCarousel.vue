<template>
    <div>
        <v-carousel v-if="welcomeData.length" height="100%" class="carousel">
            <v-carousel-item
                    active-class="carousel-item"
                    class="carousel-item"
                    v-for="(dataItem) in welcomeData"
                    :key="dataItem._id"
                    :src="dataItem.imgUrl"
            >
                <div class="description text-xs-center font-weight-medium white--text">
                    <v-layout>
                        <h3 class="display-md-3 display-1">{{ dataItem.title }}</h3>
                        <p class="display-1">{{ dataItem.text }}</p>
                    </v-layout>
                </div>
            </v-carousel-item>
        </v-carousel>

    </div>
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
    .carousel {
        min-height: 300px;
    }
    .carousel-item {
        height: calc(100vh - 64px)
    }

    @media all and (max-width: 960px) {
        .carousel-item {
            height: calc(100vh - 60px)
        }
    }

    .description {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -20%);
        opacity: 0.9;
    }
</style>