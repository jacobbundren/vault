<template>
  <v-card class="nav-bar">
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vault</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>
      <v-main />
    </v-layout>
  </v-card>
</template>


<script>
export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Home',
        value: 'home',
      },
      {
        title: 'Account',
        value: 'account',
      },
      {
        title: 'Premium',
        value: 'premium',
      }
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
  .nav-bar {
    z-index: 2
  }
</style>
