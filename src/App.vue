<template>
  <div class="container-xxl">
    <gt-header class="headerEffect"></gt-header>
    <router-view/>
  </div>
</template>

<script>
  import gtHeader from "@/components/gt-Header.vue";

  export default {
    name: "App",
    components: {
      gtHeader,
    },
  };

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.headerEffect {
  margin-top: 25px ;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
