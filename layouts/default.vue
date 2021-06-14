<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn icon  to="/"> 
        <v-icon> mdi-home  </v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon> mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <user-list></user-list>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import UserList from '../components/main/UserList.vue';
export default {
  components: { UserList },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: true,
      right: false,
      title: "My Chat",
    }
  },
  computed : {
     rightDrawer:{
         get(){
              return this.$store.state.ui.userListShow
         },
         set(value){
             this.$store.commit('ui/toggleUserList', value)
         }
      }
  }
};
</script>
