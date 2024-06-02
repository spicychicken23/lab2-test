<script setup>
import AppNavbar from './components/AppNavbar.vue';
</script>

<template>
  <div class="main">
    <AppNavbar/>
    <RouterView />
  </div>
</template>

<style scoped>
@import url('./assets/global.css');
</style>