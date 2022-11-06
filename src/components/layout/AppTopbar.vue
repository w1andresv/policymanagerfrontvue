<script setup lang="ts">
import { ref, computed } from 'vue'

const showOptions = ref( false );
const emit = defineEmits( [ 'menu-toggle' ] )


const onMenuToggle = ( event: any ) => {
  emit( 'menu-toggle', event );
};
const onClick = () => {
  showOptions.value = !showOptions.value;
}
const classOptions = computed( () => {
  return `${ !showOptions.value ? 'hidden' : '' }`;
} )

</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img alt="Logo" src="/vite.svg" />
      <span>SAKAI</span>
    </router-link>
    <button class="p-link layout-menu-button layout-topbar-button" @click=" onMenuToggle ">
      <i class="pi pi-bars"></i>
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button" @click=" onClick ">
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu lg:flex origin-top" :class=" classOptions ">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-calendar"></i>
          <span>Events</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .hidden {
    display: flex !important;
  }
}
@media (max-width: 991px) {
  .hidden {
    display: none !important;
  }
}
</style>