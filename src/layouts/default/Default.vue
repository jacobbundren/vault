<template>
  <v-app>
    <NavBar></NavBar>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './View.vue'
  import NavBar from "@/components/NavBar.vue";
</script>
