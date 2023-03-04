<template>
  <NavBar></NavBar>
  <div class="main-content">
    <router-view />
  </div>

</template>

<script lang="ts" setup>
  import NavBar from './components/NavBar.vue'
</script>
<style>
  .main-content {
    margin: 20px
  }
</style>
