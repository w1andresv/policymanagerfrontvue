<script setup lang="ts">
import { ref , onMounted} from 'vue'
import AppTopbar from './layout/AppTopbar.vue';
const tittle = ref( 'Welcome' );
onMounted(() => {
console.log('onMounted dashboard');

});
</script>
<template>
  <AppTopbar></AppTopbar>
  <h2>{{ tittle }}</h2>
  <h3>Dashboard botones</h3>
</template>
<style scoped>

</style>