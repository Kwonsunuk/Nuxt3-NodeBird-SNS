<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <!-- <v-list-subheader>내 프로필</v-list-subheader>는 nuxt3에서 지원안함. -->
          <v-card-title>내 프로필</v-card-title>
          <v-form>
            <v-text-field label="닉네임" required />
            <v-btn color="blue" type="submit">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-card-title>팔로잉</v-card-title>
          <FollowList />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-card-title>팔로워</v-card-title>
          <FollowList />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import FollowList from '../components/FollowList.vue';
// definePageMeta({ layout: 'admin' }); // ✅ Nuxt 3에서는 이 방식을 추천
useHead({
  title: '프로필',
});
</script>

<style></style>
<!-- layouts가 default.vue이면 다른 설정 필요없이 바로 적용이됨. -->
