<template>
  <div
    class="h-16 bg-zinc-900 w-full rounded-xl px-4 shadow-shape flex items-center justify-between gap-5"
  >
    <DestinationInput v-model="store.state.currentTrip.destination" :disabled="IsGuestListShow" />

    <button
      @click="toogleDatePicker(true)"
      :disabled="IsGuestListShow"
      class="flex gap-2 items-center after:block after:w-px after:h-6 after:bg-zinc-400 text-left"
    >
      <Calendar class="size-5 text-zinc-400" />
      <span class="text-md text-zinc-400 w-56">{{ store.getters.formatedDateRange() }}</span>
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

  <InviteGuestInput v-if="IsGuestListShow" />

  <ModalOverlay v-if="IsDatePickerOpen" :toogleFn="toogleDatePicker">
    <div class="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5">
      <h3 class="text-lg font-semibold">Selecione as datas:</h3>
      <VueDatePicker
        v-model="dateRange"
        :dark="true"
        :min-date="new Date()"
        inline
        auto-apply
        range
      />
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import store from '@/store'
import { ArrowRight, Calendar, Settings2 } from 'lucide-vue-next'

import DestinationInput from '../DestinationInput/DestinationInput.vue'
import InputButton from '@/components/InputButton/InputButton.vue'
import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'
import InviteGuestInput from '@/components/InviteGuestInput/InviteGuestInput.vue'
import VueDatePicker from '@vuepic/vue-datepicker'

import '@vuepic/vue-datepicker/dist/main.css'

const IsDatePickerOpen = ref(false)
const IsGuestListShow = ref(false)
const dateRange = ref<string[]>()

function toogleGuestListShow() {
  IsGuestListShow.value = !IsGuestListShow.value
}

function toogleDatePicker(value: boolean) {
  IsDatePickerOpen.value = value
}

watch(dateRange, (newDateRange) => {
  if (newDateRange && newDateRange[0] && newDateRange[1]) {
    store.mutations.setStartDate(new Date(newDateRange[0]).toISOString())
    store.mutations.setEndDate(new Date(newDateRange[1]).toISOString())
  }
})
</script>
