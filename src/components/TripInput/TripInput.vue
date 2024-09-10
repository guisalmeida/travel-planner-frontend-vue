<template>
  <div
    class="h-16 bg-zinc-900 w-full rounded-xl px-4 shadow-shape flex items-center justify-between gap-5"
  >
    <DestinationInput />

    <button
      @click="toogleDatePicker(true)"
      :disabled="false"
      class="flex gap-2 items-center after:block after:w-px after:h-6 after:bg-zinc-400 text-left"
    >
      <Calendar class="size-5 text-zinc-400" />
      <span class="text-md text-zinc-400 w-56">{{ formatRangeDate }}</span>
    </button>

    <InputButton @Click="toogleGuestListShow">
      Continuar
      <ArrowRight class="size-5" />
    </InputButton>

    <ModalOverlay v-if="IsDatePickerOpen" :toogleFn="toogleDatePicker">
      <div className="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5">
        <h3 className="text-lg font-semibold">Selecione as datas:</h3>
        <VueDatePicker v-model="date" :dark="true" :min-date="new Date()" inline auto-apply range />
      </div>
    </ModalOverlay>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowRight, Calendar } from 'lucide-vue-next'

import DestinationInput from '../DestinationInput/DestinationInput.vue'
import InputButton from '@/components/InputButton/InputButton.vue'
import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'
import VueDatePicker from '@vuepic/vue-datepicker'

import '@vuepic/vue-datepicker/dist/main.css'

const date = ref<Date[]>()
const IsDatePickerOpen = ref(false)

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
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date.value[0])

  const endDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date.value[1])

  return `${startDate} - ${endDate}`
})

defineProps<{
  toogleGuestListShow: () => void
}>()
</script>
