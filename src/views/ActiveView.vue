<script lang="ts" setup>
import AddTodo from '@/components/AddTodo.vue';
import HeaderTodo from '@/components/HeaderTodo.vue';
import TodoList from '@/components/layouts/TodoList.vue';

</script>

<template>
  <div className="w-full max-w-lg mx-auto">
    <HeaderTodo />
    <AddTodo />
    <TodoList />
  </div>
</template>