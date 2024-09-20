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

    <InputButton @click="toogleConfirmModal(true)">
      Confirmar viagem
      <ArrowRight class="size-5" />
    </InputButton>

    <InviteGuestModal
      v-if="isGuestModalOpen"
      :addToGuestList="addToGuestList"
      :toogleGuestModal="toogleGuestModal"
      :guestList="guestList"
      :removeFromGuestList="removeFromGuestList"
      v-model="email"
    />

    <ConfirmTripModal
      v-if="isConfirmModalOpen"
      :toogleConfirmModal="toogleConfirmModal"
      :guestList="guestList"
      :destination="destination"
      :dateRange="dateRange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, UserRoundPlus } from 'lucide-vue-next'
import InputButton from '../InputButton/InputButton.vue'
import InviteGuestModal from '../InviteGuestModal/InviteGuestModal.vue'
import ConfirmTripModal from '../ConfirmTripModal/ConfirmTripModal.vue'

defineProps<{
  destination: string
  dateRange: string
}>()

const email = ref('')
const guestList = ref<string[]>([])
const isGuestModalOpen = ref(false)
const isConfirmModalOpen = ref(false)

const addToGuestList = (guestEmail: string) => {
  guestList.value.push(guestEmail)
  email.value = ''
}

const removeFromGuestList = (email: string) => {
  console.log('remove')
  guestList.value = guestList.value.filter((guestEmail) => guestEmail !== email)
  console.log(guestList.value)
}

const toogleGuestModal = (value: boolean) => {
  isGuestModalOpen.value = value
}

const toogleConfirmModal = (value: boolean) => {
  isConfirmModalOpen.value = value
}
</script>
