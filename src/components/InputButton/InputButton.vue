<template>
  <button
    v-bind="$attrs"
    :class="buttonVariants({ colorVariant, sizeVariant })"
    class="font-semibold px-5 rounded-lg flex items-center justify-center gap-2 shadow-shape disabled:bg-zinc-700 disabled:text-zinc-200 disabled:cursor-not-allowed py-2"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'font-semibold px-5 rounded-lg flex items-center justify-center gap-2 shadow-shape disabled:bg-zinc-700 disabled:text-zinc-200 disabled:cursor-not-allowed',
  variants: {
    colorVariant: {
      primary: 'bg-emerald-500 text-emerald-950  hover:bg-emerald-600',
      secondary: 'bg-zinc-700 text-zinc-200 hover:bg-zinc-800'
    },
    sizeVariant: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },
  defaultVariants: {
    colorVariant: 'primary',
    sizeVariant: 'default'
  }
})

interface ButtonProps {
  colorVariant?: 'primary' | 'secondary'
  sizeVariant?: 'default' | 'full'
}

defineProps<ButtonProps>()
</script>
