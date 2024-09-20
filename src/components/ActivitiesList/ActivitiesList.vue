<template>
  <section class="flex-1 space-y-6">
    <div class="flex justify-between">
      <h1 class="font-semibold text-3xl text-zinc-50">Atividades</h1>
      <InputButton @click="toogleCreateActivityModal">
        <Plus class="size-5" />
        Cadastrar atividade
      </InputButton>
    </div>

    <div class="space-y-8">
      <div key="{index}" class="w-full space-y-2.5">
        <div class="flex gap-2 items-baseline">
          <h3 class="text-xl font-semibold text-zinc-300">Dia xxxxxx</h3>
          <span class="text-xs text-zinc-500"> xxxx </span>
        </div>

        <div class="flex flex-col gap-3">
          <div
            key="{index}"
            class="bg-zinc-900 flex gap-3 py-2 px-4 rounded-xl shadow-shape items-center"
          >
            <CircleCheck class="size-5 text-emerald-300" />
            <p class="text-zinc-100">xxx</p>
            <p class="ml-auto text-zinc-400 text-sm">xxxxxx</p>
          </div>
        </div>

        <div>
          <p class="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
        </div>
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

const showCreateActivityModal = ref(false)
const toogleCreateActivityModal = (value: boolean) => {
  showCreateActivityModal.value = value
}
</script>
