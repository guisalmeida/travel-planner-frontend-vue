<template>
  <section class="h-screen w-full flex flex-col align items-center justify-between py-8">
    <AppHeader>
      <TripInput />
    </AppHeader>

    <main class="flex flex-col gap-4 my-10 max-w-screen-md"></main>

    <AppFooter />
  </section>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import TripInput from '@/components/TripInput/TripInput.vue'
</script>
