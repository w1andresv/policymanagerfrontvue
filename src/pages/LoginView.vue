<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg?: string, msg2?: string }>();

const count = ref( 0 );
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ msg2 }}</h1>
  <div class="card">
    <button type="button" @click=" count++ ">count is {{ count }}</button>
    <Button label="Primary" />
    <Button label="Secondary" class="p-button-secondary" />
    <Button label="Success" class="p-button-success" />
    <Button label="Info" class="p-button-info" />
    <Button label="Warning" class="p-button-warning" />
    <Button label="Warning" class="p-button-help" />
    <Button label="Danger" class="p-button-danger" />

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
