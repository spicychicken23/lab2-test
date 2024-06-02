<template>
    <div class="contentpic">
      <h1>PHOTOS</h1>
      <hr>
      <ol>
        <li v-for="photo in pics" :key="photo.id">
          <img :src="photo.thumbnailUrl" :alt="photo.title" />
          <p>{{ photo.title }}</p>
        </li>
      </ol>
    </div>
  </template>
  
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const photos = ref([]);
const searchQuery = ref('');
const route = useRoute();

const fetchPhotos = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    photos.value = response.data.slice(0, 10);
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
};

onMounted(() => {
  fetchPhotos();
  searchQuery.value = route.query.search || '';

  window.addEventListener('search-updated', (event) => {
    searchQuery.value = event.detail;
  });
});

const pics = computed(() => {
  if (!searchQuery.value) return photos.value;
  return photos.value.filter(photo =>
    photo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

watch(() => route.query.search, (newSearch) => {
  searchQuery.value = newSearch || '';
});
</script>

