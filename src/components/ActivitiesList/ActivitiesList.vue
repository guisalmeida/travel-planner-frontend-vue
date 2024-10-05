<template>
  <section class="flex-1 space-y-6">
    <div class="flex justify-between">
      <h1 class="font-semibold text-3xl text-zinc-50">Atividades</h1>
      <InputButton @click="toogleCreateActivityModal">
        <Plus class="size-5" />
        Create Activity
      </InputButton>
    </div>

    <div class="space-y-8" v-if="store.state.currentTrip.activities">
      <div
        :key="activity.id"
        class="w-full space-y-2.5"
        v-for="activity in store.state.currentTrip.activities"
      >
        <div class="flex gap-2 items-baseline">
          <h3 class="text-xl font-semibold text-zinc-300">Dia {{ getDay(activity.occurs_at) }}</h3>
          <span class="text-xs text-zinc-500">{{ getWeekDay(activity.occurs_at) }}</span>
        </div>

        <div class="flex flex-col gap-3">
          <div
            key="{index}"
            class="bg-zinc-900 flex gap-3 py-2 px-4 rounded-xl shadow-shape items-center"
          >
            <CircleCheck class="size-5 text-emerald-300" />
            <p class="text-zinc-100">{{ activity.title }}</p>
            <p class="ml-auto text-zinc-400 text-sm">{{ getHours(activity.occurs_at) }}</p>
          </div>
        </div>

        <!-- <div>
          <p class="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
        </div> -->
      </div>
    </div>

    <CreateActivityModal
      :toogleCreateActivityModal="toogleCreateActivityModal"
      v-if="showCreateActivityModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputButton from '../InputButton/InputButton.vue'
import { CircleCheck, Plus } from 'lucide-vue-next'
import CreateActivityModal from '../CreateActivityModal/CreateActivityModal.vue'

import store from '@/store'

const showCreateActivityModal = ref(false)
const toogleCreateActivityModal = (value: boolean) => {
  showCreateActivityModal.value = value
}

const getWeekDay = (dateString: string) => {
  const dayNumber = new Date(dateString).getDay()
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return weekdays[dayNumber]
}

const getDay = (dateString: string) => {
  const dayNumber = new Date(dateString).getDate()
  return dayNumber
}

const getHours = (dateString: string) => {
  const time = new Date(dateString).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
  return time
}
</script>
