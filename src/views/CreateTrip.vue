<template>
  <section class="h-screen w-full flex flex-col align items-center justify-between py-8">
    <AppHeader />

    <main class="flex flex-col gap-4 my-10 max-w-screen-md">
      <TripInput :toogleGuestListShow="toogleGuestListShow" />
      <InviteGuestInput v-if="IsGuestListShow" />
    </main>

    <AppFooter />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import InviteGuestInput from '@/components/InviteGuestInput/InviteGuestInput.vue'
import TripInput from '@/components/TripInput/TripInput.vue'

const IsGuestListShow = ref(false)

function toogleGuestListShow() {
  IsGuestListShow.value = !IsGuestListShow.value
}
</script>
