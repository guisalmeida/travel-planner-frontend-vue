<template>
  <div class="bg-black/50 fixed inset-0 backdrop-blur-sm flex items-center justify-center">
    <div class="relative">
      <CloseButton @click="toogleFn(false)" :disable="false" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseButton from '../CloseButton/CloseButton.vue'

defineSlots<{
  default: () => void
}>()

defineProps<{
  toogleFn: (value: boolean) => void
}>()
</script>
