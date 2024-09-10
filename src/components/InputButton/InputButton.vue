<template>
  <button
    :class="primary"
    class="font-semibold px-5 rounded-lg flex items-center justify-center gap-2 shadow-shape disabled:bg-zinc-700 disabled:text-zinc-200 disabled:cursor-not-allowed py-2"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const primary = 'bg-lime-500 text-lime-950  hover:bg-lime-600'
</script>
