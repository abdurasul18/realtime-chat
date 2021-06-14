<template>
  <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
    <v-list>
      <v-list-item @click.native="right = !right">
        <v-list-item-action>
          <v-icon light> mdi-repeat </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item  :to="`/public/1`">
          <v-list-item-icon>
            <v-icon> mdi-account-group </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="'Public chat'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      users: [
      ],
      right: false,
    };
  },
  computed: {
    rightDrawer: {
      get() {
        return this.$store.state.ui.userListShow;
      },
      set(value) {
        this.$store.commit("ui/toggleUserList", value);
      },
    },
  },

};
</script>

<style>
</style>