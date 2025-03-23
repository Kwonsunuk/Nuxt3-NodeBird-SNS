<!-- signup.vue -->
<template>
  <div class="container mt-5">
    <div class="card p-4">
      <div class="card-body">
        <h3 class="card-title text-center mb-4">회원가입</h3>
        <form @submit.prevent="onSubmitForm" novalidate>
          <!-- 이메일 입력 -->
          <div class="mb-3 position-relative">
            <label for="email" class="form-label">이메일</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              @input="validateEmail"
              :class="{ 'is-invalid': email && !emailValid, 'is-valid': emailValid }"
              required
            />
            <div class="invalid-feedback">올바른 이메일 주소를 입력하세요.</div>
            <div class="valid-feedback">올바른 이메일 형식입니다!</div>
          </div>

          <!-- 비밀번호 입력 -->
          <div class="mb-3 position-relative">
            <label for="password" class="form-label">비밀번호</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              @input="validatePassword"
              :class="{ 'is-invalid': password && !passwordValid, 'is-valid': passwordValid }"
              required
            />
            <div class="invalid-feedback">비밀번호는 최소 6자 이상이어야 합니다.</div>
            <div class="valid-feedback">사용 가능한 비밀번호입니다.</div>
          </div>

          <!-- 비밀번호 확인 -->
          <div class="mb-3 position-relative">
            <label for="passwordCheck" class="form-label">비밀번호 확인</label>
            <input
              type="password"
              class="form-control"
              id="passwordCheck"
              v-model="passwordCheck"
              @input="validatePasswordCheck"
              :class="{
                'is-invalid': passwordCheck && !passwordCheckValid,
                'is-valid': passwordCheckValid,
              }"
              required
            />
            <div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
            <div class="valid-feedback">비밀번호가 일치합니다.</div>
          </div>

          <!-- 닉네임 입력 -->
          <div class="mb-3 position-relative">
            <label for="nickname" class="form-label">닉네임</label>
            <input
              type="text"
              class="form-control"
              id="nickname"
              v-model="nickname"
              @input="validateNickname"
              :class="{ 'is-invalid': nickname && !nicknameValid, 'is-valid': nicknameValid }"
              required
            />
            <div class="invalid-feedback">닉네임은 최소 2자 이상이어야 합니다.</div>
            <div class="valid-feedback">사용 가능한 닉네임입니다.</div>
          </div>

          <!-- 약관 동의 -->
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="terms" v-model="terms" required />
            <label class="form-check-label" for="terms">동의하시겠습니까?</label>
            <div class="invalid-feedback">약관에 동의해야 가입할 수 있습니다.</div>
          </div>

          <!-- 가입 버튼 -->
          <button type="submit" class="btn btn-success w-100">가입하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useUsersStore } from '@/store/users';

definePageMeta({
  title: '회원가입',
  middleware: 'anonymous',
});

// 반응형 상태
const email = ref('');
const password = ref('');
const passwordCheck = ref('');
const nickname = ref('');
const terms = ref(false);
const userStore = useUsersStore();
const { me } = storeToRefs(userStore);
const router = useRouter();

// 유효성 검사 함수
const emailValid = computed(() => /.+@.+\..+/.test(email.value));
const passwordValid = computed(() => password.value.length >= 6);
const passwordCheckValid = computed(
  () => password.value.length >= 6 && password.value === passwordCheck.value
);
const nicknameValid = computed(() => nickname.value.length >= 2);

// 실시간 유효성 검사 (입력 도중에도 반응)
const validateEmail = () => {};
const validatePassword = () => {};
const validatePasswordCheck = () => {};
const validateNickname = () => {};

// 가입 버튼 클릭 시 실행
const onSubmitForm = () => {
  if (
    emailValid.value &&
    passwordValid.value &&
    passwordCheckValid.value &&
    nicknameValid.value &&
    terms.value
  ) {
    // user store의 모듈을 사용.
    userStore.signUp({
      email: email.value,
      nickname: nickname.value,
    });
    alert('회원가입 완료!');
    router.push('/');
  } else {
    alert('입력 정보를 확인해주세요.');
  }
};
</script>

<style>
/* Bootstrap이 적용되어 있어야 함 */
</style>
