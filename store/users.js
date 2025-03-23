// /store/users.js - 사용자 상태 관리 스토어 파일
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUsersStore = defineStore('users', () => {
  // 상태: 사용자 정보를 담는 me 변수
  const me = ref(null);
  // 상태: 팔로워, 팔로잉 리스트 (배열로 초기화)
  const followerList = ref([
    { id: 1, name: '제로초초초' },
    { id: 2, name: '우기' },
    { id: 3, name: '차차' },
  ]);
  const followingList = ref([
    { id: 4, name: '홍길동' },
    { id: 5, name: '이순신' },
    { id: 6, name: '장보고' },
  ]);

  // getter: 로그인 여부를 boolean 값으로 반환
  const isLoggedIn = computed(() => !!me.value);

  // 상태: 팔로워, 팔로잉이 더 있냐 없냐 판별 변수
  const hasMoreFollowing = ref(true);
  const hasMoreFollower = ref(true);

  // DB가 없는 관계로 시뮬레이션 더미 데이터
  const totalFollowers = 8;
  const totalFollowings = 6;
  /**
   * limit은 실제로 실무에서 사용하지 않음.
   * 더보기를 누루는 과정에서 팔로잉 팔로워 수가 변할 수 있어서.
   * lastId 방식을 사용함.
   */
  const limit = 3;

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

  // 팔로워 리스트 추가 (배열 전체 교체)
  function addFollower(payload) {
    followerList.value = payload;
  }

  // 팔로잉 리스트 추가 (배열 전체 교체)
  function addFollowing(payload) {
    followingList.value = payload;
  }
  // 더미 데이터 생성 헬퍼 함수
  function generateDummyUsers(startId, count, prefix = '추가팔로워') {
    return Array.from({ length: count }, (_, i) => ({
      id: startId + i,
      name: `${prefix}${startId + i}`,
    }));
  }

  // 팔로워가 더 있을 경우(더보기..)
  function loadMoreFollowers() {
    const currentLength = followerList.value.length;
    const remaining = totalFollowers - currentLength;
    if (remaining > 0) {
      const addCount = remaining >= limit ? limit : remaining;
      const newFollowers = generateDummyUsers(currentLength + 1, addCount, '팔로워');
      followerList.value = followerList.value.concat(newFollowers);
      if (followerList.value.length >= totalFollowers) {
        hasMoreFollower.value = false;
      }
    } else {
      hasMoreFollower.value = false;
    }
  }

  // 팔로잉이 더 있을 경우(더보기..)
  function loadMoreFollowings() {
    const currentLength = followingList.value.length;
    const remaining = totalFollowings - currentLength;
    if (remaining > 0) {
      const addCount = remaining >= limit ? limit : remaining;
      const newFollowings = generateDummyUsers(currentLength + 1, addCount, '팔로잉');
      followingList.value = followingList.value.concat(newFollowings);
      if (followingList.value.length >= totalFollowings) {
        hasMoreFollowing.value = false;
      }
    } else {
      hasMoreFollowing.value = false;
    }
  }

  // 팔로워 제거
  function removeFollower(id) {
    const index = followerList.value.findIndex((v) => v.id === id);
    if (index > -1) {
      followerList.value.splice(index, 1);
    }
  }

  // 팔로잉 제거
  function removeFollowing(id) {
    const index = followingList.value.findIndex((v) => v.id === id);
    if (index > -1) {
      followingList.value.splice(index, 1);
    }
  }
  // store 반환 항목
  return {
    me,
    followerList,
    followingList,
    isLoggedIn,
    hasMoreFollower,
    hasMoreFollowing,
    totalFollowers,
    totalFollowings,
    limit,
    setMe,
    logIn,
    signUp,
    logOut,
    changeNickname,
    addFollower,
    addFollowing,
    generateDummyUsers,
    loadMoreFollowers,
    loadMoreFollowings,
    removeFollower,
    removeFollowing,
  };
});
