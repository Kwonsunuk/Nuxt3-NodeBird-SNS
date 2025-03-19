<template>
  <div>
    <ul class="list-group">
      <li
        v-for="item in list"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{{ item.name }}</span>
        <i class="fas fa-minus-circle text-danger" @click="$emit('remove', item.id)"></i>
      </li>
    </ul>
    <div v-if="message" class="alert alert-danger mt-2">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Array,
  message: String,
});
</script>

<style>
.alert-danger {
  background-color: #f8d7da;
  color: #a94442;
  border: 1px solid #f5c6cb;
}
</style>
