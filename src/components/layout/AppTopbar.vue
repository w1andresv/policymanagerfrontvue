<script setup lang="ts">
const onMenuToggle = ( event: any ) => {
  // $emit('menu-toggle', event);
};
const onTopbarMenuToggle = ( event:any ) => {
  // this.$emit('topbar-menu-toggle', event);
};
const topbarImage = () => {
  // return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
}

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

    <button class="p-link layout-topbar-menu-button layout-topbar-button" >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
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

