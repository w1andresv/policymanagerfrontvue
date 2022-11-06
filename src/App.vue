<script setup lang="ts">
import { ref, computed, onBeforeUpdate } from "vue";
import AppMenu from "../src/components/layout/AppMenu.vue";
import AppTopBar from "../src/components/layout/AppTopbar.vue";

const layoutMode = ref( "static" );
const staticMenuInactive = ref( false );
const overlayMenuActive = ref( false );
const mobileMenuActive = ref( false );
const menu = <any> ref( [
  {
    label: "Home",
    items: [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        to: "/",
      },
    ],
  },
  {
    label: "UI Components",
    icon: "pi pi-fw pi-sitemap",
    items: [
      {
        label: "Form Layout",
        icon: "pi pi-fw pi-id-card",
        to: "/formlayout",
      },
    ],
  },
  {
    label: "Pages",
    icon: "pi pi-fw pi-clone",
    items: [
      { label: "Login", icon: "pi pi-fw pi-sign-in", to: "/login" },
      { label: "Error", icon: "pi pi-fw pi-times-circle", to: "/error" },
      {
        label: "Not Found",
        icon: "pi pi-fw pi-exclamation-circle",
        to: "/notfound",
      },
      { label: "Access Denied", icon: "pi pi-fw pi-lock", to: "/access" },
    ],
  },
] );
const containerClass = computed( () => {
return[
    "layout-wrapper p-input-filled",
    {
      "layout-overlay": layoutMode.value === "overlay",
      "layout-static": layoutMode.value === "static",
      "layout-static-sidebar-inactive": staticMenuInactive.value===true&& layoutMode.value === "static",
      "layout-overlay-sidebar-active": overlayMenuActive.value===true && layoutMode.value === "overlay",
      "layout-mobile-sidebar-active": mobileMenuActive.value===true
    }
  ]
  
} );
const isDesktop = () => {
  return window.innerWidth >= 992;
};

const onMenuToggle = ( event: any ) => {
  event.preventDefault();
  if ( isDesktop() ) {
    if ( layoutMode.value === "overlay" ) {
      if ( mobileMenuActive.value === true ) {
        overlayMenuActive.value = true;
      }
      overlayMenuActive.value = !overlayMenuActive.value;
      mobileMenuActive.value = false;
    } else if ( layoutMode.value === "static" ) {
      staticMenuInactive.value = !staticMenuInactive.value;
    }
  } else {
    if ( mobileMenuActive.value===true ) {
      mobileMenuActive.value = false;
    } else {
      mobileMenuActive.value = true;
    }
  }
 
};
const onSidebarClick = () => { };
const onMenuItemClick = ( event: any ) => {
  if ( event.item && !event.item.items ) {
    overlayMenuActive.value = false;
    mobileMenuActive.value = false;
  }
};
const addClass = ( element: any, className: any ) => {
  if ( element.classList ) element.classList.add( className );
  else element.className += " " + className;
};
const removeClass = ( element: any, className: any ) => {
  if ( element.classList ) element.classList.remove( className );
  else
    element.className = element.className.replace(
      new RegExp(
        "(^|\\b)" + className.split( " " ).join( "|" ) + "(\\b|$)",
        "gi"
      ),
      " "
    );
};

onBeforeUpdate( () => {
  if ( mobileMenuActive.value ) {
    addClass( document.body, "body-overflow-hidden" );
  } else {
    removeClass( document.body, "body-overflow-hidden" );
  }
} );
</script>
<template>
  <div :class=" containerClass " >
    <AppTopBar @menu-toggle=" onMenuToggle " />
    <div class="layout-sidebar" @click=" onSidebarClick ">
      <AppMenu :model=" menu " @menuitem-click=" onMenuItemClick " />
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view />
      </div>
      <!-- <AppFooter /> -->
    </div>
    <transition name="layout-mask">
      <div class="layout-mask p-component-overlay" v-if=" mobileMenuActive "></div>
    </transition>
  </div>
</template>
<style scoped>
.p-toast.p-toast-top-right {
  z-index: 1000;
  top: 7rem;
}
</style>
