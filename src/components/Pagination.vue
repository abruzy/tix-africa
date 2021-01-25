<template>
  <pagination
    v-model="state.page"
    :records="state.users.length"
    :per-page="10"
    @paginate="myCallback($event)"
  />
</template>

<script>
import Pagination from 'v-pagination-3';
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Pagination',
  components: {
    Pagination,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      users: store.state.User.users,
      page: 1,
      start: 0,
      end: 10,
    });
    const myCallback = (event) => {
      const num = event - 1;
      state.start = num * 10;
      state.end = num * 10 + 10;
    };
    return {
      state,
      myCallback,
    };
  },
};
</script>
