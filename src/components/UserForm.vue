<template>
  <div class="contentuser">
    <form @submit.prevent="saveProfile">
      <table>
        <tr>
          <th>Name</th>
          <td>:</td>
          <td><input :value="profile.name" @input="updateField('name', $event)" type="text"></td>
        </tr>
        <tr>
          <th>Course Year</th>
          <td>:</td>
          <td><input :value="profile.course" @input="updateField('courseYear', $event)" type="text"></td>
        </tr>
        <tr>
          <th>Matric No.</th>
          <td>:</td>
          <td><input :value="profile.matric" @input="updateField('matricNo', $event)" type="text"></td>
        </tr>
        <tr>
          <th>Address</th>
          <td>:</td>
          <td><input :value="profile.add" @input="updateField('address', $event)" type="text"></td>
        </tr>
        <tr>
          <td colspan="3"><button type="submit">Save</button> <button type="button" @click="resetFields">Reset</button></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const profile = computed(() => store.state.profile);

const updateField = (field, event) => {
  store.dispatch('updateProfileField', { field, value: event.target.value });
};

const resetFields = () => {
  // Check if the initial state exists and is an object
  if (store.state.initialProfile && typeof store.state.initialProfile === 'object') {
    // Reset each field to its initial value stored in the Vuex store
    const initialState = store.state.initialProfile;
    Object.keys(initialState).forEach(field => {
      store.dispatch('updateProfileField', { field, value: initialState[field] });
    });
  } else {
    console.error('Initial state is undefined or not an object.');
  }
};

const saveProfile = () => {
  alert('Profile saved!');
};
</script>
