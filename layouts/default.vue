<!-- layouts/default.vue -->
<template>
  <div class="container-fluid p-0">
    <!-- ✅ 네비게이션 바 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container">
        <NuxtLink class="navbar-brand fw-bold text-white" href="/">NodeBird</NuxtLink>

        <!-- 모바일 메뉴 버튼 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <!-- 검색창 -->
            <li class="nav-item me-3">
              <form v-on:submit.prevent="onSearchHashtag">
                <div>
                  <input
                    type="text"
                    v-model="hashtag"
                    class="form-control me-3"
                    placeholder="검색"
                  />
                </div>
              </form>
            </li>
            <li class="nav-item">
              <NuxtLink class="btn btn-outline-light me-2" to="/profile">프로필</NuxtLink>
            </li>
            <li class="nav-item" v-if="!me">
              <NuxtLink class="btn btn-outline-light" to="/signup">회원가입</NuxtLink>
            </li>
            <li class="nav-item" v-else>
              <button class="btn btn-outline-light" @click="onLogOut">로그아웃</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- ✅ 메인 레이아웃 -->
    <div class="container mt-4">
      <div class="row gx-0">
        <!-- 로그인 컴포넌트 -->
        <div class="col-md-4 mb-4">
          <div class="sticky-top" style="top: 90px">
            <LoginForm />
          </div>
        </div>

        <div class="col-md-8">
          <NuxtPage :key="$route.fullPath" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useHead } from '#imports';
import { useUsersStore } from '~/store/users';

import LoginForm from '../components/LoginForm.vue';

useHead({
  title: 'NodeBird',
});

const userStore = useUsersStore();
const { me } = storeToRefs(userStore); // ✅ store의 me 상태를 반응형으로 가져온다.
const router = useRouter();
const hashtag = ref('');

const onSearchHashtag = () => {
  if (hashtag.value.trim().length === 0) {
    return;
  }

  router.push({
    path: `/hashtag/${hashtag.value.trim()}`,
  });
  hashtag.value = '';
};

const onLogOut = () => {
  userStore.logOut();
};
</script>

<style>
/* 추가적인 스타일이 필요하면 여기에 작성 */
</style>

<!-- 레이아웃을 명시적으로 지정하지 않으면 기본 적용된다 default.vue는 -->
