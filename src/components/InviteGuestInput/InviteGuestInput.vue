<template>
  <div
    class="h-16 bg-zinc-900 w-full rounded-xl px-4 shadow-shape flex items-center justify-between gap-5"
  >
    <div class="flex gap-2 items-center flex-1 after:block after:w-px after:h-6 after:bg-zinc-400">
      <UserRoundPlus class="size-5 text-zinc-400" />
      <button
        v-if="guestList.length > 0"
        class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400 text-left"
        @click="toogleGuestModal(true)"
      >
        {{ guestList.length }} pessoa(s) na viagem?
      </button>

      <button
        v-else
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

    <InviteGuestModal
      v-if="IsGuestModalOpen"
      :addToGuestList="addToGuestList"
      :toogleGuestModal="toogleGuestModal"
      :guestList="guestList"
      :removeFromGuestList="removeFromGuestList"
      v-model="email"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, UserRoundPlus } from 'lucide-vue-next'
import InputButton from '../InputButton/InputButton.vue'
import InviteGuestModal from '../InvestGuestModal/InviteGuestModal.vue'

const email = ref('')
const guestList = ref<string[]>([])

const IsGuestModalOpen = ref(false)

const addToGuestList = (guestEmail: string) => {
  guestList.value.push(guestEmail)
  email.value = ''
}

const removeFromGuestList = (email: string) => {
  console.log('remove')

  guestList.value = guestList.value.filter((guestEmail) => guestEmail !== email)
  console.log(guestList.value)
}

function toogleGuestModal(value: boolean) {
  IsGuestModalOpen.value = value
}
</script>
