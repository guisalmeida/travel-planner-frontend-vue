<template>
  <ModalOverlay :toogle-fn="toogleConfirmModal">
    <div class="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5 w-[640px] relative">
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Confirmar criação da viagem</h3>
        <p class="text-zinc-400 text-sm">
          Para concluir a criação da viagem para {{ destination }} nas datas de {{ dateRange }},
          preencha seus dados abaixo:
        </p>
      </div>

      <form class="flex justify-between flex-col gap-2" @submit="confirmTrip">
        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center py-2.5 px-4 gap-2 w-full"
        >
          <User class="size-5 text-zinc-400" />
          <input
            type="text"
            name="ownerName"
            v-model="ownerName"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
            placeholder="Digite seu nome completo"
          />
        </div>

        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center py-2.5 px-4 gap-2 w-full"
        >
          <Mail class="size-5 text-zinc-400" />
          <input
            type="email"
            name="ownerEmail"
            v-model="ownerEmail"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
            placeholder="Digite seu e-mail pessoal"
          />
        </div>
        <div class="w-full h-px bg-zinc-800" />

        <InputButton>Confirmar criação da viagem</InputButton>
      </form>
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, User } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'
import InputButton from '../InputButton/InputButton.vue'

const ownerName = ref('')
const ownerEmail = ref('')
const router = useRouter()

const confirmTrip = (e: any) => {
  e.preventDefault()

  router.push(`/trips/123`)
}

defineProps<{
  toogleConfirmModal: (value: boolean) => void
  destination: string
  dateRange: string
  guestList: string[]
}>()
</script>
