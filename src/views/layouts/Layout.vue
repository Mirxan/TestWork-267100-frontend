<template>
  <div>
    <div class="wrapper">
      <nav-bar />
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  name: 'Layout',
  components:{
    NavBar
  }
};
</script>
