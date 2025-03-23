<!-- pages/profile.vue -->
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
        <FollowList
          :list="userStore.followingList"
          :message="followingMessage"
          @remove="removeFollowing"
        />
        <b-button
          v-if="hasMoreFollowing"
          color="outline-secondary"
          style="width: 100%"
          @click="userStore.loadMoreFollowings()"
        >
          더보기..
        </b-button>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">팔로워</h5>
        <FollowList
          :list="userStore.followerList"
          :message="followerMessage"
          @remove="removeFollower"
        />
        <b-button
          v-if="hasMoreFollower"
          color="outline-secondary"
          style="width: 100%"
          @click="userStore.loadMoreFollowers()"
        >
          더보기..
        </b-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue';

import { useUsersStore } from '~/store/users';

import FollowList from '../components/FollowList.vue';

definePageMeta({
  title: '프로필',
  middleware: 'authenticated',
});

const userStore = useUsersStore();
const nickname = ref(userStore.me?.nickname ?? '');
const followingMessage = ref('');
const followerMessage = ref('');
const successTimeout = ref(null);
const hasMoreFollower = computed(() => userStore.hasMoreFollower);
const hasMoreFollowing = computed(() => userStore.hasMoreFollowing);

onUnmounted(() => {
  if (successTimeout.value) {
    clearTimeout(successTimeout.value);
  }
});

const removeFollowing = (id) => {
  const target = userStore.followingList.find((item) => item.id === id);
  if (target) {
    userStore.removeFollowing(id);
    followingMessage.value = `${target.name}의 팔로잉이 취소되었습니다.`;
    successTimeout.value = setTimeout(() => (followingMessage.value = ''), 3000);
  }
};

const removeFollower = (id) => {
  const target = userStore.followerList.find((item) => item.id === id);
  if (target) {
    userStore.removeFollower(id);
    followerMessage.value = `${target.name}의 팔로워를 해제하였습니다.`;
    successTimeout.value = setTimeout(() => (followerMessage.value = ''), 3000);
  }
};

const onSubmitForm = () => {
  if (nickname.value.trim().length > 0) {
    userStore.changeNickname(nickname.value);
    alert(`닉네임이 "${nickname.value}"(으)로 변경되었습니다.`);
    nickname.value = userStore.me.nickname; // 동기화
  } else {
    alert('닉네임을 입력하세요.');
  }
};
</script>

<style>
/* Bootstrap 스타일 적용 */
</style>
