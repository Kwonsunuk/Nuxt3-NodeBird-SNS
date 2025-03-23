<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-4 mb-3" v-for="user in list" :key="user.id">
        <div class="card d-flex flex-row align-items-center p-3 shadow-sm">
          <!-- 아바타 -->
          <div
            class="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white me-3"
            style="width: 50px; height: 50px; font-size: 1.5rem"
          >
            {{ user.nickname ? user.name[0] : 'N' }}
          </div>

          <!-- 유저 닉네임 -->
          <div class="flex-grow-1">
            <h6 class="mb-0">{{ user.name }}</h6>
          </div>

          <!-- 삭제 아이콘 -->
          <button class="btn btn-link p-0" @click="$emit('remove', user.id)">
            <i class="fas fa-minus-circle text-danger fs-4"></i>
          </button>
        </div>
      </div>
      <!-- 오류 메시지 -->
      <div v-if="message" class="alert alert-danger mt-2">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  message: {
    type: String,
    default: '',
  },
});
</script>

<style>
.alert-danger {
  background-color: #f8d7da;
  color: #a94442;
  border: 1px solid #f5c6cb;
}
</style>
