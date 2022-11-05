<script setup lang="ts">
import appsubmenu from './AppSubmenu.vue'
import { ref, onMounted } from 'vue'

const emit = defineEmits( [ 'menuitem-click' ] )

const activeIndex = ref( null );
const props = defineProps( {
  items: [],
  root: { type: Boolean, default: false }
} );


const onMenuItemClick = ( event: any, item: any, index: any ) => {
  if ( item.disabled ) {
    event.preventDefault();
    return;
  }

  if ( !item.to && !item.url ) {
    event.preventDefault();
  }

  //execute command
  if ( item.command ) {
    item.command( { originalEvent: event, item: item } );
  }

  activeIndex.value = index === activeIndex.value ? null : index;

  emit( 'menuitem-click', {
    originalEvent: event,
    item: item
  } );
};
const visible = ( item: any ) => {
  return ( typeof item.visible === 'function' ? item.visible() : item.visible !== false );
}


</script>


<template>
  <ul v-if=" items ">
    <template v-for=" (  item, i  ) of items">
      <li v-if=" visible( item ) && !item[ 'separator' ] " :key=" item[ 'label' ] || i "
          :class=" [ { 'layout-menuitem-category': root, 'active-menuitem': activeIndex === i && !item[ 'to' ] && !item[ 'disabled' ] } ] "
          role="none">
        <template v-if=" root ">
          <div class="layout-menuitem-root-text" :aria-label=" item[ 'label' ] ">{{ item[ 'label' ] }}</div>
          <appsubmenu :items=" visible( item ) && item[ 'items' ] " @menuitem-click=" emit( 'menuitem-click', $event ) "></appsubmenu>
        </template>
        <template v-else>
          <router-link v-if=" item[ 'to' ] " :to=" item[ 'to' ] "
                       :class=" [ item[ 'class' ], 'p-ripple', { 'p-disabled': item[ 'disabled' ] } ] " :style=" item[ 'style' ] "
                       @click=" onMenuItemClick( $event, item, i ) " :target=" item[ 'target' ] " :aria-label=" item[ 'label' ] " exact
                       role="menuitem">
            <i :class=" item[ 'icon' ] "></i>
            <span>{{ item[ 'label' ] }}</span>
            <i v-if=" item[ 'items' ] " class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>
            <Badge v-if=" item[ 'badge' ] " :value=" item[ 'badge' ] "></Badge>
          </router-link>
          <a v-if=" !item[ 'to' ] " :href=" item[ 'url' ] || '#' " :style=" item[ 'style' ] "
             :class=" [ item[ 'class' ], 'p-ripple', { 'p-disabled': item[ 'disabled' ] } ] " @click=" onMenuItemClick( $event, item, i ) "
             :target=" item[ 'target' ] " :aria-label=" item[ 'label' ] " role="menuitem">
            <i :class=" item[ 'icon' ] "></i>
            <span>{{ item[ 'label' ] }}</span>
            <i v-if=" item[ 'items' ] " class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>
            <Badge v-if=" item[ 'badge' ] " :value=" item[ 'badge' ] "></Badge>
          </a>
          <transition name="layout-submenu-wrapper">
            <appsubmenu v-show=" activeIndex === i " :items=" visible( item ) && item[ 'items' ] "
                        @menuitem-click=" emit( 'menuitem-click', $event ) ">
            </appsubmenu>
          </transition>
        </template>
      </li>
      <li class="p-menu-separator" :style=" item[ 'style' ] " v-if=" visible( item ) && item[ 'separator' ] " :key=" 'separator' + i "
          role="separator"></li>
    </template>
  </ul>
</template>
