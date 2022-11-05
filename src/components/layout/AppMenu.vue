

<script setup lang="ts">
import AppSubmenu from './AppSubmenu.vue'
const emit = defineEmits( [ 'menuitem-click' ] )
const props = defineProps( {
  model: []
} );

const onMenuItemClick = ( event: any ) => {
  emit( 'menuitem-click', event );
};
const onKeyDown = ( event: any ) => {
  const nodeElement = event.target;
  if ( event.code === 'Enter' || event.code === 'Space' ) {
    nodeElement.click();
    event.preventDefault();
  }
};


</script>
<template>
  <div class="layout-menu-container">
    <AppSubmenu :items=" model " class="layout-menu" :root=" true " @menuitem-click=" onMenuItemClick " @keydown=" onKeyDown " />
  </div>
</template>