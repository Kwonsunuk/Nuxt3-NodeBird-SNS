<template>
  <div class="container mt-5" v-if="!me">
    <div class="card p-4 shadow-sm">
      <div class="card-body">
        <h4 class="card-title text-center mb-3">로그인</h4>
        <form @submit.prevent="onSubmit">
          <!-- 이메일 입력 -->
          <div class="mb-3">
            <label for="email" class="form-label">이메일</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
              @input="validateForm"
              :class="{ 'is-invalid': email && !emailValid, 'is-valid': emailValid }"
              required
            />
            <div class="invalid-feedback">이메일이 유효하지 않습니다.</div>
          </div>

          <!-- 비밀번호 입력 -->
          <div class="mb-3">
            <label for="password" class="form-label">비밀번호</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="password"
              @input="validateForm"
              :class="{ 'is-invalid': password && !passwordValid, 'is-valid': passwordValid }"
              required
            />
            <div class="invalid-feedback">비밀번호는 최소 6자 이상이어야 합니다.</div>
          </div>

          <!-- 로그인 버튼 -->
          <button type="submit" class="btn btn-success w-100" :disabled="!formValid">로그인</button>

          <!-- 회원가입 버튼 -->
          <a href="/signup" class="btn btn-outline-secondary w-100 mt-2">회원가입</a>
        </form>
      </div>
    </div>
  </div>
  <div class="container mt-5" v-else>
    <div class="card p-4 shadow-sm">
      {{ me.nickname }}로그인 되었습니다.
      <button class="btn btn-success w-100" @click="onLogOut">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import { useUsersStore } from '~/store/users';

// 반응형 상태
const email = ref('');
const password = ref('');
const formValid = ref(false);
const store = useUsersStore();
const me = computed(() => store.me);

// 유효성 검사
const emailValid = computed(() => /.+@.+\..+/.test(email.value));
const passwordValid = computed(() => password.value.length >= 6);

// 폼 유효성 검사 실행
const validateForm = () => {
  formValid.value = emailValid.value && passwordValid.value;
};

// 로그인 처리 함수
const onSubmit = () => {
  if (formValid.value) {
    store.logIn({
      email: email,
    });
    alert('로그인 성공!');
  } else {
    alert('입력 정보를 확인하세요.');
  }
};

const onLogOut = () => {
  store.logOut();
};
</script>

<style>
/* 추가적인 스타일이 필요하면 여기에 작성 */
</style>
