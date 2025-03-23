import { useUsersStore } from '~/store/users';

// middleware/authenticated.js 로그인한 사용자인지 검사하는 미들웨어
export default defineNuxtRouteMiddleware(() => {
  const userStore = useUsersStore();
  if (!userStore.isLoggedIn) {
    return navigateTo('/'); // 메인으로 보내서 메인에 LoginForm 표시
  }
});
