import { useUsersStore } from '~/store/users';

// middleware/anonymous.js 로그인 안한 사용자를 검증하는 미들웨어
export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const userStore = useUsersStore($pinia);

  if (userStore.isLoggedIn) {
    return navigateTo('/'); // 이미 로그인한 유저라면 홈으로 리디렉트
  }
});
