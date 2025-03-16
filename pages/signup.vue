<template>
  <div>
    <v-container>
      <v-card class="pa-4">
        <v-container>
          <v-card-title>회원가입</v-card-title>
          <v-form @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              :rules="emailRules"
              required
            />

            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호 확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="text"
              :rules="nicknameRules"
              required
            />
            <v-checkbox v-model="terms" label="동의하시겠습니까?" :rules="termsRules" required />
            <v-btn color="green" type="submit">가입하기 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

useHead({
  title: '회원가입',
});

// ✅ `ref()`를 사용하여 반응형 상태 생성
const email = ref('');
const password = ref('');
const passwordCheck = ref('');
const nickname = ref('');
const terms = ref(false);

// ✅ 유효성 검사 규칙 (rules 배열)
const emailRules = [
  (v) => !!v || '이메일은 필수입니다.',
  (v) => /.+@.+\..+/.test(v) || '이메일이 유효하지 않습니다.',
];

const passwordRules = [
  (v) => !!v || '비밀번호는 필수입니다.',
  (v) => v.length >= 6 || '비밀번호는 최소 6자 이상이어야 합니다.',
];

const passwordCheckRules = [
  (v) => !!v || '비밀번호 확인을 입력하세요.',
  (v) => v === password.value || '비밀번호가 일치하지 않습니다.',
];

const nicknameRules = [
  (v) => !!v || '닉네임은 필수입니다.',
  (v) => v.length >= 2 || '닉네임은 최소 2자 이상이어야 합니다.',
];

const termsRules = [(v) => v || '약관에 동의해야 가입할 수 있습니다.'];

// ✅ 유효성 검사 (모든 필드가 조건을 충족해야 유효)
const valid = computed(() => {
  return (
    email.value.match(/.+@.+\..+/) &&
    password.value.length >= 6 &&
    password.value === passwordCheck.value &&
    nickname.value.length >= 2 &&
    terms.value
  );
});

// ✅ 회원가입 버튼 클릭 시 실행할 함수
const onSubmitForm = () => {
  if (valid.value) {
    console.log('회원가입 데이터:', {
      email: email.value,
      password: password.value,
      nickname: nickname.value,
      terms: terms.value,
    });
    alert('회원가입 완료!');
  } else {
    alert('입력 정보를 확인해주세요.');
  }
};
</script>

<style></style>
