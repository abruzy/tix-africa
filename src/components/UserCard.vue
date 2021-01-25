<template>
  <div>
    <div class="max-w-6xl mx-auto py-20">
      <div class="grid md:grid-cols-2 px-5 lg:grid-cols-3 gap-x-6 gap-y-5">
        <div
          v-for="item in state.users.slice(state.start, state.end)"
          :key="item.id"
          class="shadow-xs rounded hover:shadow-xl border border-gray-200"
        >
          <img
            class="w-32 h-32 rounded-full mx-auto"
            src="https://images.generated.photos/VKyZVOINQhI7XxHDhuEoiUOuitQliEKWXwhYa5PUsIk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5ODIyNjMuanBn.jpg"
            alt=""
          />
          <div class="py-4 px-3 flex flex-col items-center bg-white max-w-md">
            <h4 class="text-xl font-medium w-56 text-center">
              {{ item.name }}
            </h4>
            <h4 class="text-xl font-medium w-56 text-center">
              {{ item.email }}
            </h4>
            <h4 class="text-xl font-medium w-56 text-center">
              {{ item.gender }}
            </h4>
            <button
              @click="fetchuser(item)"
              class="p-2 my-2 rounded bg-green-700 text-white focus:bg-green-900 hover:shadow-xl"
            >
              Guess
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <pagination
        class="VuePagination__pagination"
        v-model="state.page"
        :records="state.users.length"
        :per-page="10"
        @paginate="myCallback($event)"
      />
    </div>
  </div>
</template>

<script>
import Pagination from 'v-pagination-3';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

export default {
  name: 'UserCard',
  components: {
    Pagination,
  },
  setup() {
    const store = useStore();
    const route = useRouter();
    const state = reactive({
      users: store.state.User.users,
      page: 1,
      start: 1,
      end: 10,
    });
    const fetchuser = async (user) => {
      await store.dispatch('User/setUser', user);
      route.push({ path: 'userdetails' });
    };
    const myCallback = (event) => {
      const num = event - 1;
      state.start = num * 10;
      state.end = num * 10 + 10;
    };
    return {
      state,
      fetchuser,
      myCallback,
    };
  },
};
</script>

<style lang="scss" scoped>
.VuePagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.VuePagination__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
