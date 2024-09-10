<template>
  <div class="flex gap-2 items-center flex-1">
    <MapPin class="size-5 text-zinc-400" />
    <input
      type="text"
      name="destination"
      class="bg-transparent text-lg text-zinc-400 placeholder-zinc-400 flex-1"
      placeholder="Para onde você vai?"
      :disabled="false"
      v-model="destination"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPin } from 'lucide-vue-next'

const destination = ref('')
</script>
