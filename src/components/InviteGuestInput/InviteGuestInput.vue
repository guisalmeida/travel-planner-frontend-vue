<template>
  <div
    class="h-16 bg-zinc-900 w-full rounded-xl px-4 shadow-shape flex items-center justify-between gap-5"
  >
    <div class="flex gap-2 items-center flex-1 after:block after:w-px after:h-6 after:bg-zinc-400">
      <UserRoundPlus class="size-5 text-zinc-400" />

      <button
        class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400 text-left"
        @click="toogleGuestModal(true)"
      >
        Quem estará na viagem?
      </button>
    </div>

    <InputButton>
      Confirmar viagem
      <ArrowRight class="size-5" />
    </InputButton>

    <InviteGuestModal v-if="IsGuestModalOpen" :toogleGuestModal="toogleGuestModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, UserRoundPlus } from 'lucide-vue-next'
import InputButton from '../InputButton/InputButton.vue'
import InviteGuestModal from '../InvestGuestModal/InviteGuestModal.vue'

const IsGuestModalOpen = ref(false)
function toogleGuestModal(value: boolean) {
  IsGuestModalOpen.value = value
}
</script>
