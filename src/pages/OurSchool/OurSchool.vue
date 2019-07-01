<template>
   <div>
       <v-tabs
               color="blue lighten-1"
               v-model="active"
               dark
       >
           <v-tab
                   v-for="tab in tabs"
                   :key="tab.path"
                   :to="{name: tab.name}"
                   exact
           >
              <v-icon left>
                  {{ tab.icon }}
              </v-icon>

               {{ tab.label }}

           </v-tab>
       </v-tabs>

       <router-view></router-view>
   </div>
</template>


<script>
    import { OurSchoolRoute } from '../../router/OurSchoolRoute';

    const OurSchool = {
        data() {
            return {
                tabs: OurSchoolRoute.children,
                active: ''
            }
        }
    };

    export default OurSchool;
</script>