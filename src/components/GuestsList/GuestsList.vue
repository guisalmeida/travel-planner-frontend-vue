<template>
  <div class="flex w-full flex-col space-y-6">
    <h2 class="text-xl text-zinc-50 font-semibold">Convidados</h2>

    <div class="space-y-5">
      <div
        v-for="(guest, index) in guestList"
        class="flex items-center justify-between hover:bg-zinc-900 rounded py-1 px-2"
        :key="index"
      >
        <div class="space-y-1.5">
          <p class="text-zinc-100 font-medium">xxx</p>
          <span class="text-zinc-400 text-sm truncate block"> {{ guest }} </span>
        </div>

        <CircleCheck class="size-5 text-sky-400 flex-shrink-0" />

        <!-- <CircleDashed class="size-5 text-zinc-400 flex-shrink-0" /> -->
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
      :guestList="guestList"
      :removeFromGuestList="removeFromGuestList"
      v-model="email"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserCog, CircleCheck, CircleDashed } from 'lucide-vue-next'
import InputButton from '../InputButton/InputButton.vue'
import InviteGuestModal from '@/components/InviteGuestModal/InviteGuestModal.vue'

const isGuestModalOpen = ref(false)
const email = ref('')
const guestList = ref<string[]>([])

function toogleGuestModal(value: boolean) {
  isGuestModalOpen.value = value
}

const addToGuestList = (guestEmail: string) => {
  guestList.value.push(guestEmail)
  email.value = ''
}

const removeFromGuestList = (email: string) => {
  console.log('remove')
  guestList.value = guestList.value.filter((guestEmail) => guestEmail !== email)
  console.log(guestList.value)
}
</script>
