<template>
  <div
    class="h-16 bg-zinc-900 w-full rounded-xl px-4 shadow-shape flex items-center justify-between gap-5"
  >
    <DestinationInput v-model="destination" :disabled="IsGuestListShow" />

    <button
      @click="toogleDatePicker(true)"
      :disabled="IsGuestListShow"
      class="flex gap-2 items-center after:block after:w-px after:h-6 after:bg-zinc-400 text-left"
    >
      <Calendar class="size-5 text-zinc-400" />
      <span class="text-md text-zinc-400 w-56">{{ formatRangeDate }}</span>
    </button>

    <InputButton @click="toogleGuestListShow" v-if="!IsGuestListShow">
      Continuar
      <ArrowRight class="size-5" />
    </InputButton>

    <InputButton @click="toogleGuestListShow" v-else colorVariant="secondary">
      Alterar local/data
      <Settings2 class="size-5" />
    </InputButton>
  </div>

  <InviteGuestInput
    v-if="IsGuestListShow"
    :destination="destination"
    :dateRange="formatRangeDate"
  />

  <ModalOverlay v-if="IsDatePickerOpen" :toogleFn="toogleDatePicker">
    <div class="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5">
      <h3 class="text-lg font-semibold">Selecione as datas:</h3>
      <VueDatePicker v-model="date" :dark="true" :min-date="new Date()" inline auto-apply range />
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ArrowRight, Calendar, Settings2 } from 'lucide-vue-next'

import DestinationInput from '../DestinationInput/DestinationInput.vue'
import InputButton from '@/components/InputButton/InputButton.vue'
import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'
import InviteGuestInput from '@/components/InviteGuestInput/InviteGuestInput.vue'
import VueDatePicker from '@vuepic/vue-datepicker'

import '@vuepic/vue-datepicker/dist/main.css'

const date = ref<Date[]>()
const destination = ref('')
const IsDatePickerOpen = ref(false)
const IsGuestListShow = ref(false)

function toogleGuestListShow() {
  IsGuestListShow.value = !IsGuestListShow.value
}

function toogleDatePicker(value: boolean) {
  IsDatePickerOpen.value = value
}

const formatRangeDate = computed(() => {
  if (!date.value) {
    return 'Quando?'
  }

  const startDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
    // hour: '2-digit',
    // minute: '2-digit',
    // hour12: false
  }).format(date.value[0])

  const endDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
    // hour: '2-digit',
    // minute: '2-digit',
    // hour12: false
  }).format(date.value[1])

  return `${startDate} - ${endDate}`
})

watch(destination, (newDest) => {
  console.log(`Destination is ${newDest}`)
})
</script>
