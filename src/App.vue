<script setup lang="ts">
import { ref } from "vue";
const layoutMode = ref( 'static' );
const staticMenuInactive = ref( false );
const overlayMenuActive = ref( false );
const mobileMenuActive = ref( false );
const containerClass = () => {
  return [ 'layout-wrapper', {
    'layout-overlay': layoutMode.value === 'overlay',
    'layout-static': layoutMode.value === 'static',
    'layout-static-sidebar-inactive': staticMenuInactive && layoutMode.value === 'static',
    'layout-overlay-sidebar-active': overlayMenuActive && layoutMode.value === 'overlay',
    'layout-mobile-sidebar-active': mobileMenuActive,
    'p-input-filled': true,
    'p-ripple-disabled': false
  } ];
}
const onWrapperClick = () => {
  overlayMenuActive.value = false;
  mobileMenuActive.value = false;
};
const isDesktop = () => {
  return window.innerWidth >= 992;
};

const onMenuToggle = () => {

  if ( isDesktop() ) {
    if ( layoutMode.value === 'overlay' ) {
      if ( mobileMenuActive.value === true ) {
        overlayMenuActive.value = true;
      }

      overlayMenuActive.value = !overlayMenuActive.value;
      mobileMenuActive.value = false;
    } else if ( layoutMode.value === 'static' ) {
      staticMenuInactive.value = !staticMenuInactive.value;
    }
  } else {
    mobileMenuActive.value = !mobileMenuActive.value;
  }

  event.preventDefault();
}

</script>
<template>
  <div :class=" containerClass " @click=" onWrapperClick ">
    <AppTopBar @menu-toggle=" onMenuToggle " />
    <!-- <div class="layout-sidebar" @click=" onSidebarClick "> -->
      <!-- <AppMenu :model="menu" @menuitem-click="onMenuItemClick"/> -->
    <!-- </div> -->

    <div class="layout-main-container">
      <div class="layout-main">
        <router-view />
      </div>
      <AppFooter />
    </div>

    <transition name="layout-mask">
      <div class="layout-mask p-component-overlay" v-if=" mobileMenuActive "></div>
    </transition>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
