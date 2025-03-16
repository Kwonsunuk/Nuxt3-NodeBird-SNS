<template>
  <v-app>
    <v-container>
      <!-- ✅ 네비게이션 바 -->
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <NuxtLink to="/" style="color: white; text-decoration: none; font-weight: bold">
            NodeBird
          </NuxtLink>
        </v-toolbar-title>

        <v-spacer />
        <v-toolbar-items>
          <v-container style="max-width: 400px">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              label="검색"
              variant="outlined"
              density="compact"
              style="width: 250px; max-width: 300px"
            />
          </v-container>
          <v-btn variant="text" nuxt to="/profile"> 프로필 </v-btn>
          <v-btn variant="text" nuxt to="/signup"> 회원가입 </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!-- ✅ 메인 레이아웃 -->
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <!-- ✅ 로그인 컴포넌트 -->
          <LoginForm />
        </v-col>
        <v-col cols="12" md="8">
          <NuxtPage />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';

useHead({
  title: 'NodeBird',
});
</script>

<style></style>

<!-- 레이아웃을 명시적으로 지정하지 않으면 기본 적용된다 default.vue는 -->
