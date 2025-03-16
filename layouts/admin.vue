<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
      <NuxtLink to="/signup">Signup</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
    </nav>
    <h1>Admin Layout</h1>
    <NuxtPage />
    <!-- ✅ Nuxt 3에서는 반드시 <NuxtPage /> 사용 -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
<!-- 레이아웃을 명시적으로 지정하지 않으면 기본 적용된다 default.vue는 -->
