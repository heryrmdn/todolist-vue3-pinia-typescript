<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import ListTodo from '../ListTodo.vue';

const { path } = useRoute();

</script>

<template>
  <div class="my-5 flex gap-x-4">
    <RouterLink to="/" class="badge cursor-pointer" :class="path === '/' ? 'badge-accent' : 'badge-ghost'">
      All
    </RouterLink>
    <RouterLink to="/active" class="badge cursor-pointer" :class="path === '/active' ? 'badge-accent' : 'badge-ghost'">
      Active
    </RouterLink>
    <RouterLink to="/completed" class="badge cursor-pointer"
      :class="path === '/completed' ? 'badge-accent' : 'badge-ghost'">
      Completed
    </RouterLink>
  </div>

  <ListTodo />
</template>