<template>
   <div>
       <v-navigation-drawer app temporary v-model="drawer">
           <v-list>
               <v-list-tile
                       v-for="route in routes"
                       :key="route.name"
                       :to="route.path"
               >
                   <v-list-tile-action>
                       <v-icon>{{ route.icon}}</v-icon>
                   </v-list-tile-action>

                   <v-list-tile-content>
                       <v-list-tile-title v-text="route.label"></v-list-tile-title>
                   </v-list-tile-content>

               </v-list-tile>
           </v-list>
       </v-navigation-drawer>
       <v-toolbar app dark color="blue">
           <v-toolbar-side-icon
                   class="hidden-md-and-up"
                   @click="drawer = !drawer"/>
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
   </div>
</template>


<script>
    import { routes } from '../../router';
    import { HEADER_TEXT } from '../../constants';

    const Header = {
        data() {
            return {
                text: HEADER_TEXT,
                drawer: false,
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