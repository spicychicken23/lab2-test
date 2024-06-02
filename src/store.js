import { createStore } from 'vuex';

export default createStore({
  state: {
    profile: {
      name: 'Ahmad Hafiz Ali',
      course: '3 SECJH',
      matric: 'A21MJ5012',
      add: 'Taman Greenwood, 68100 Batu Caves, Selangor'
    }
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    updateProfileField(state, { field, value }) {
      state.profile[field] = value;
    }
  },
  actions: {
    updateProfile({ commit }, profile) {
      commit('setProfile', profile);
    },
    updateProfileField({ commit }, payload) {
      commit('updateProfileField', payload);
    }
  },
  getters: {
    profile: (state) => state.profile
  }
});
