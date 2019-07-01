<template>
    <v-carousel>
        <v-carousel-item
                v-for="(dataItem) in welcomeData"
                :key="dataItem.id"
                :src="dataItem.imgUrl"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
     const HomecCrousel = {
         computed: {
             welcomeData() {
                 console.log(this);

                 return [];
             }
         }
    };

    export default HomecCrousel;
</script>