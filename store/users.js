// /store/users.js - 사용자 상태 관리 스토어 파일
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUsersStore = defineStore('users', () => {
  // 상태: 사용자 정보를 담는 me 변수
  const me = ref(null);

  // getter: 로그인 여부를 boolean 값으로 반환
  const isLoggedIn = computed(() => !!me.value);

  // actions: 사용자 정보 설정
  function setMe(payload) {
    me.value = payload;
  }

  // actions: 로그인 처리 (임시로 payload를 바로 me에 할당)
  function logIn(payload) {
    me.value = {
      nickname: payload.nickname || '게스트',
      email: payload.email,
    };
  }

  // actions: 회원가입 시 사용자 정보 설정
  function signUp(payload) {
    me.value = {
      nickname: payload.nickname || '새 사용자',
      email: payload.email,
    };
  }

  // actions: 로그아웃
  function logOut() {
    me.value = null;
  }

  function changeNickname(newNickname) {
    if (me.value) {
      me.value.nickname = newNickname;
    }
  }
  // store 반환 항목
  return {
    me,
    isLoggedIn,
    setMe,
    logIn,
    signUp,
    logOut,
    changeNickname,
  };
});
