<script setup>
</script>

<template>
  <div v-if="$route.name !== 'Home'" class="navigation">
    <nav class="navigation__links">
      <router-link to="/" class="navigation__link" :class="{ 'navigation__link--active' : $route.name == 'Home'}">Home</router-link>
      <router-link to="/exercise1" class="navigation__link" :class="{ 'navigation__link--active' : $route.name == 'Exercise1'}">Exercise 1</router-link>
      <router-link to="/exercise2" class="navigation__link" :class="{ 'navigation__link--active' : $route.name == 'Exercise2'}">Exercise 2</router-link>
    </nav>
    <router-link to="/" class="navigation__title">Frontend Assessment</router-link>
  </div>
  <main>
    <router-view />
  </main>
</template>