<template>
  <div class="flex w-full flex-col space-y-6">
    <h2 class="text-xl text-zinc-50 font-semibold">Links importantes</h2>
    <div class="space-y-5" v-if="store.state.currentTrip.links">
      <a
        :href="link.url"
        :key="link.id"
        target="_blank"
        v-for="link in store.state.currentTrip.links"
      >
        <div class="flex items-center justify-between hover:bg-zinc-900 rounded py-1 px-2">
          <div class="space-y-1.5">
            <p class="text-zinc-100 font-medium capitalize">{{ link.title }}</p>
            <p class="text-zinc-400 font-medium text-xs truncate block">{{ link.url }}</p>
          </div>
          <SquareArrowOutUpRight class="size-5 text-zinc-400 flex-shrink-0" />
        </div>
      </a>
    </div>
    <p class="text-zinc-400 font-medium text-xs truncate block" v-else>Nenhum link cadastrado.</p>

    <InputButton @click="toogleCreateLinkModal">
      <Plus class="size-5 text-sky-950 font-bold" />
      Cadastrar novo link
    </InputButton>
  </div>

  <CreateLinkModal
    :toogleCreateLinkModal="toogleCreateLinkModal"
    :addToLinkList="addToLinkList"
    v-if="showCreateLinkModal"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CreateLinkModal from '../CreateLinkModal/CreateLinkModal.vue'
import InputButton from '../InputButton/InputButton.vue'
import { Plus, SquareArrowOutUpRight } from 'lucide-vue-next'
import store, { type Link } from '@/store'

const showCreateLinkModal = ref(false)
const toogleCreateLinkModal = (value: boolean) => {
  showCreateLinkModal.value = value
}

const addToLinkList = (link: Link) => {
  store.mutations.addLink(link)
}

const removeFromLinkList = (linkId: string) => {
  store.mutations.removeLink(linkId)
}
</script>
