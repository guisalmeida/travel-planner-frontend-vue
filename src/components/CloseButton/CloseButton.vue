<template>
  <button class="absolute right-6 top-5 z-10" v-bind="closeButtonProps">
    <X class="text-zinc-300 size-5 rounded-sm hover:bg-zinc-700 flex items-center justify-center" />
  </button>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { X } from 'lucide-vue-next'

defineProps<{
  closeButtonProps?: HTMLAttributes
}>()
</script>
