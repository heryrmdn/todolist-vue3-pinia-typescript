<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';

const todo = ref("");
const error = ref(false);
const store = useTodoStore();

const handleAddTodo = () => {
  if (todo.value.length === 0) {
    error.value = true;
    setTimeout(() => error.value = false, 3000);
  } else {
    store.addTodo(todo.value);
    todo.value = ""
  }
}

</script>

<template>
  <form @submit.prevent="handleAddTodo">
    <div className="flex my-5 gap-x-4">
      <input v-model="todo" type="text" placeholder="What to do" className="input input-bordered input-primary w-full" />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </div>
    <div v-if="error" className="text-red-500 font-semibold">Error! Todo is empty.</div>
  </form>
</template>