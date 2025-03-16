<template>
  <v-container>
    <v-card class="pa-4">
      <v-form v-model="formValid">
        <v-text-field v-model="email" :rules="emailRules" label="이메일" type="email" required />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="비밀번호"
          type="password"
          required
        />
        <v-btn color="green" type="submit" :disabled="!formValid">로그인</v-btn>
        <v-btn nuxt to="/signup">회원가입</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const formValid = ref(false); // ✅ 폼 전체 유효성 상태

// ✅ 유효성 검사 규칙 (rules 배열)
const emailRules = [
  (v) => !!v || '이메일은 필수입니다.',
  (v) => /.+@.+\..+/.test(v) || '이메일이 유효하지 않습니다.',
];

const passwordRules = [
  (v) => !!v || '비밀번호는 필수입니다.',
  (v) => v.length >= 6 || '비밀번호는 최소 6자 이상이어야 합니다.',
];
</script>
