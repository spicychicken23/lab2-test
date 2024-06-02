<template>
  <div class="info-display">
    <table>
      <tr>
        <th>Name</th>
        <td>:</td>
        <td class="info-display">{{ profile.name }}</td>
      </tr>
      <tr>
        <th>Course Year</th>
        <td>:</td>
        <td class="info-display">{{ profile.course }}</td>
      </tr>
      <tr>
        <th>Matric No.</th>
        <td>:</td>
        <td class="info-display">{{ profile.matric }}</td>
      </tr>
      <tr>
        <th>Address</th>
        <td>:</td>
        <td class="info-display">{{ profile.add }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const profile = computed(() => store.getters.profile);
</script>
