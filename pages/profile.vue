<template>
  <div class="container mt-5">
    <!-- 내 프로필 -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">내 프로필</h5>
        <form @submit.prevent="onSubmitForm">
          <div class="mb-3">
            <label for="nickname" class="form-label">닉네임</label>
            <input
              type="text"
              id="nickname"
              class="form-control"
              v-model="nickname"
              placeholder="닉네임을 입력하세요."
              value="nickname"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">수정</button>
        </form>
      </div>
    </div>

    <!-- 팔로잉 리스트 -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">팔로잉</h5>
        <FollowList />
      </div>
    </div>

    <!-- 팔로워 리스트 -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">팔로워</h5>
        <FollowList />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useHead } from '#imports';
import { useUsersStore } from '~/store/users';

import FollowList from '../components/FollowList.vue';

useHead({
  title: '프로필',
});

const userStore = useUsersStore();
const nickname = ref(userStore.me?.nickname ?? '');

const onSubmitForm = () => {
  if (nickname.value.trim().length > 0) {
    userStore.changeNickname(nickname.value);
    alert(`닉네임이 "${nickname.value}"(으)로 변경되었습니다.`);
  } else {
    alert('닉네임을 입력하세요.');
  }
};
</script>

<style>
/* Bootstrap 스타일 적용 */
</style>
