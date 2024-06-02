<template>
  <div class="navbar">
    <div class="icon">
      <h2 class="logo">W.Tech.</h2>
    </div>

    <div class="menu">
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
        <li><RouterLink to="/profile">PROFILE</RouterLink></li>
        <li><RouterLink to="/photos">PHOTOS</RouterLink></li>
      </ul>
    </div>

    <div class="search">
      <input class="srch" type="search" placeholder="Type To Find" v-model="searchQuery">
      <button class="btn" @click="searchPhotos">Find</button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const searchQuery = ref('');

const searchPhotos = () => {
  router.push({ path: '/photos', query: { search: searchQuery.value } });
  window.dispatchEvent(new CustomEvent('search-updated', { detail: searchQuery.value }));
};
</script>


<style scoped>
@import url('../assets/global.css');
</style>
