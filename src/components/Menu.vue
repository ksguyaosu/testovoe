<template>
  <div class="menu">
    <router-link to="/layout">Вёрстка</router-link>
    <router-link to="/table">Таблица</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "menuLay"
}
</script>

<style scoped>
 .menu a {
   padding: 20px;
   text-decoration: none;
   color: green;
   font-size: 20px;
 }
</style>