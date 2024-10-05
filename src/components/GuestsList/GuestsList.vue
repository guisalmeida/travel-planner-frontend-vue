<template>
  <div class="flex w-full flex-col space-y-6">
    <h2 class="text-xl text-zinc-50 font-semibold">Convidados</h2>

    <div class="space-y-5">
      <div
        v-for="(guest, index) in store.state.currentTrip.participants"
        class="flex items-center justify-between hover:bg-zinc-900 rounded py-1 px-2"
        :key="index"
      >
        <div class="space-y-1.5">
          <p class="text-zinc-100 font-medium">{{ guest.name ? guest.name : 'Guest ' + index }}</p>
          <span class="text-zinc-400 text-sm truncate block"> {{ guest.email }} </span>
        </div>

        <CircleCheck class="size-5 text-sky-400 flex-shrink-0" v-if="guest.is_confirmed" />

        <CircleDashed class="size-5 text-zinc-400 flex-shrink-0" v-else />
      </div>
    </div>

    <InputButton @click="toogleGuestModal">
      <UserCog class="size-5 text-sky-950" />
      Gerenciar convidados
    </InputButton>

    <InviteGuestModal
      v-if="isGuestModalOpen"
      :addToGuestList="addToGuestList"
      :toogleGuestModal="toogleGuestModal"
      :removeFromGuestList="removeFromGuestList"
      v-model:name="participantName"
      v-model:email="participantEmail"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserCog, CircleCheck, CircleDashed } from 'lucide-vue-next'
import InputButton from '../InputButton/InputButton.vue'
import InviteGuestModal from '@/components/InviteGuestModal/InviteGuestModal.vue'

import store, { type Participant } from '@/store'

const isGuestModalOpen = ref(false)
const participantName = ref('')
const participantEmail = ref('')

function toogleGuestModal(value: boolean) {
  isGuestModalOpen.value = value
}

const addToGuestList = (participant: Participant) => {
  store.mutations.addParticipant(participant)
  participantName.value = ''
  participantEmail.value = ''
}

const removeFromGuestList = (participantId: string) => {
  store.mutations.removeParticipant(participantId)
}
</script>
