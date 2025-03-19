<template>
  <div class="container mt-5">
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
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">수정</button>
        </form>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">팔로잉</h5>
        <FollowList :list="following" :message="followingMessage" @remove="removeFollowing" />
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">팔로워</h5>
        <FollowList :list="followers" :message="followerMessage" @remove="removeFollower" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';

import { useHead } from '#imports';
import { useUsersStore } from '~/store/users';

import FollowList from '../components/FollowList.vue';

useHead({ title: '프로필' });

const userStore = useUsersStore();
const nickname = ref(userStore.me?.nickname ?? '');
const following = ref([
  { id: 1, name: '제로초초초' },
  { id: 2, name: '우기' },
  { id: 3, name: '차차' },
]);
const followers = ref([
  { id: 4, name: '홍길동' },
  { id: 5, name: '이순신' },
  { id: 6, name: '장보고' },
]);
const followingMessage = ref('');
const followerMessage = ref('');
const successTimeout = ref(null);

const removeFollowing = (id) => {
  const target = following.value.find((item) => item.id === id);
  if (target) {
    following.value = following.value.filter((item) => item.id !== id);
    followingMessage.value = `${target.name}의 팔로잉이 취소되었습니다.`;
    successTimeout.value = setTimeout(() => (followingMessage.value = ''), 3000);
  }
};

const removeFollower = (id) => {
  const target = followers.value.find((item) => item.id === id);
  if (target) {
    followers.value = followers.value.filter((item) => item.id !== id);
    followerMessage.value = `${target.name}의 팔로워를 해제하였습니다.`;
    successTimeout.value = setTimeout(() => (followerMessage.value = ''), 3000);
  }
};

onUnmounted(() => {
  if (successTimeout.value) {
    clearTimeout(successTimeout.value);
  }
});

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
