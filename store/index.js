// /stores/index.ts (Pinia로 변환된 글로벌 설정 스토어)

import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    hello: 'pinia',
  }),
  actions: {
    // 필요한 경우 global 레벨에서 actions 추가 가능
  },
  getters: {
    // 필요한 경우 getters 추가 가능
  },
});

// /stores/users.ts 파일 예시
// 기존 users 모듈도 동일하게 pinia 스토어로 분리해 관리한다.

// import { defineStore } from 'pinia'
// export const useUsersStore = defineStore('users', {
//   state: () => ({
//     userList: [],
//   }),
//   actions: {
//     addUser(user) {
//       this.userList.push(user)
//     },
//   },
// })
