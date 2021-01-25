<template>
  <!-- <div v-if="state.userdata && state.userdata.country.length > 0">
    <li v-for="item in state.userdata.country" :key="item.country_id">
      {{ item.country_id }} - {{ item.probability }}
    </li>
    {{ state.userdata.name }}
  </div>
  <div v-else-if="state.userdata && state.userdata.country">
    <p>No match for {{ state.userdata.name }}</p>
  </div>
  <div v-else><Loader /></div> -->

  <div
    v-if="state.userdata && state.userdata.country.length > 0"
    class="over-flow-y-auto max-w-6xl mx-auto mt-10"
  >
    <div class="shadow-xs hover:shadow-xl bg-white p-4 mb-6">
      <div class="flex">
        <div class="mr-3 h-40">
          <img
            src="https://images.generated.photos/VKyZVOINQhI7XxHDhuEoiUOuitQliEKWXwhYa5PUsIk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5ODIyNjMuanBn.jpg"
            alt=""
            class="max-w-full object-cover h-32"
          />
        </div>
        <div>
          <h4
            v-for="item in state.userdata.country"
            :key="item.country_id"
            class="text-base"
          >
            {{ state.userdata.name }} is probably from {{ item.country_id }}
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="state.userdata && state.userdata.country">
    <h2 class="text-center mt-10 text-2xl font-medium">
      No match for {{ state.userdata.name }}
    </h2>
  </div>
  <div v-else><Loader /></div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

import Loader from '../components/Loader.vue';

export default {
  components: {
    Loader,
  },
  mounted() {
    this.fetctUserData();
  },
  setup() {
    const store = useStore();
    const state = reactive({
      selectedUser: store.state.User.selectedUser,
      userdata: null,
    });

    const fetctUserData = () => {
      console.log(state.user);
      fetch(`https://api.nationalize.io?name=${state.selectedUser.name}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((response) => {
          state.userdata = response;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      state,
      fetctUserData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
