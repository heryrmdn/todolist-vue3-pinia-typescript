<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { IconPencil, IconTrashXFilled } from '@tabler/icons-vue';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const store = useTodoStore();
const location = useRoute();

const action = () => {
  switch (location.path) {
    case "/active": {
      store.getActiveTodo();
      break;
    }
    case "/completed": {
      store.getCompletedTodo();
      break;
    }
    default: {
      store.getAllTodos();
      break;
    }
  }
}

onMounted(() => { action() });

watch(() => store.todos, () => { action() });

</script>

<template>
  <div v-if="!(store.todosView.length < 1)" class="flex flex-col">
    <div v-for="todo in store.todosView" :key="todo.id"
      class="form-control flex flex-col justify-between items-center border p-2">

      <div v-if="!todo.isEdit" class="flex w-full justify-between">
        <label class="label cursor-pointer flex px-2 gap-x-4 flex-1 justify-start">
          <input :checked="todo.completed" @change="store.editStatusTodo(todo.id)" type="checkbox"
            class="checkbox checkbox-primary" />
          <span class="label-text break-all" :class="todo.completed ? 'line-through' : ''">{{ todo.value }}</span>
        </label>
        <div class="flex items-center px-2 gap-x-4">
          <IconPencil @click="store.editTodo(todo.id)" class="cursor-pointer" />
          <IconTrashXFilled @click="store.deleteTodo(todo.id)" class="cursor-pointer" />
        </div>
      </div>

      <div v-if="todo.isEdit" className="flex w-full">
        <input type="text" placeholder="Type here" className="input w-full focus:outline-none" v-model="todo.value"
          @keydown.enter="store.editTodo(todo.id)" autoFocus />
        <button @click="store.editTodo(todo.id)" className="btn">
          Update
        </button>
      </div>
    </div>
  </div>
</template>