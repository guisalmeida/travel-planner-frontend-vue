<template>
  <ModalOverlay :toogleFn="toogleGuestModal">
    <div class="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5 w-[640px] relative">
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Selecionar convidados</h3>
        <p class="text-zinc-400 text-sm">
          Os convidados irão receber e-mails para confirmar a participação na viagem.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <div
          class="bg-zinc-800 px-2.5 py-1.5 rounded-md flex justify-between gap-2 items-center relative"
          v-for="(guestEmail, index) in guestList"
          :key="index"
        >
          <span class="text-zinc-300 text-base">{{ guestEmail }}</span>
          <button
            @click="removeFromGuestList(guestEmail)"
            class="size-5 rounded-sm hover:bg-zinc-700 flex items-center justify-center"
          >
            <X class="text-zinc-300 size-4" />
          </button>
        </div>
      </div>

      <div class="w-full h-px bg-zinc-800" />

      <form class="flex justify-between">
        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center py-2.5 px-4 gap-2 w-full"
        >
          <AtSign class="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
            placeholder="Digite o e-mail do convidado"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            required
          />
          <InputButton
            @click.prevent="addToGuestList(modelValue)"
            :disabled="!modelValue"
            type="button"
          >
            Convidar
            <ArrowRight class="size-5" />
          </InputButton>
        </div>
      </form>
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">
import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'
import InputButton from '../InputButton/InputButton.vue'
import { X, AtSign, ArrowRight } from 'lucide-vue-next'

const props = defineProps<{
  modelValue: string
  guestList: string[]
  addToGuestList: (email: string) => void
  removeFromGuestList: (email: string) => void
  toogleGuestModal: (value: boolean) => void
}>()
console.log(Boolean(props.modelValue))
</script>
