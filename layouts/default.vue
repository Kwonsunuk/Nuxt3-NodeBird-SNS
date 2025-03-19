<template>
  <div class="container-fluid p-0">
    <!-- ✅ 네비게이션 바 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container">
        <a class="navbar-brand fw-bold text-white" href="/">NodeBird</a>

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
              <input type="text" class="form-control me-3" placeholder="검색" />
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-light me-2" href="/profile">프로필</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-light" href="/signup">회원가입</a>
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
          <LoginForm />
        </div>
        <div class="col-md-8">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports';

import LoginForm from '../components/LoginForm.vue';

useHead({
  title: 'NodeBird',
});
</script>

<style>
/* 추가적인 스타일이 필요하면 여기에 작성 */
</style>

<!-- 레이아웃을 명시적으로 지정하지 않으면 기본 적용된다 default.vue는 -->
