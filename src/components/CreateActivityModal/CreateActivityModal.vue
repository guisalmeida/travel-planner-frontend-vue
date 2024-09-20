<template>
  <ModalOverlay :toogleFn="toogleCreateActivityModal">
    <div class="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5 w-[640px] relative">
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Cadastrar atividade</h3>
        <p class="text-zinc-400 text-sm">Todos convidados podem visualizar as atividades.</p>
      </div>

      <form class="flex flex-col gap-2" @submit="createActivity">
        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center p-4 gap-2 w-full"
        >
          <Tag class="size-5 text-zinc-400" />
          <input
            type="text"
            name="activity"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
            placeholder="Qual a atividade?"
          />
        </div>

        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center p-4 gap-2 w-full"
        >
          <Calendar class="size-5 text-zinc-400" />
          <input
            type="datetime-local"
            name="acitivity-time"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
          />
        </div>

        <InputButton sizeVariant="full">Salvar atividade</InputButton>
      </form>
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">
import InputButton from '../InputButton/InputButton.vue'
import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'
import { Tag, Calendar } from 'lucide-vue-next'

function createActivity(e: any) {
  e.preventDefault()

  const data = new FormData(e.currentTarget)
  const activity = data.get('activity')
  const activityTime = data.get('acitivity-time')

  const options = {
    title: activity,
    occurs_at: activityTime
  }

  console.log(options)

  // await api.post(`/trips/${tripId}/activities`, options);
  props.toogleCreateActivityModal(false)
}

const props = defineProps<{
  toogleCreateActivityModal: (value: boolean) => void
}>()
</script>
