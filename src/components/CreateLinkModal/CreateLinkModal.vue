<template>
  <ModalOverlay :toogleFn="toogleCreateLinkModal">
    <div class="shadow-shape bg-zinc-900 py-5 px-6 rounded-xl space-y-5 w-[640px] relative">
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">Cadastrar link</h3>
        <p class="text-zinc-400 text-sm">Todos convidados podem visualizar os links importantes.</p>
      </div>

      <form class="flex flex-col gap-2" @submit="createLink">
        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center p-4 gap-2 w-full"
        >
          <Tag class="size-5 text-zinc-400" />
          <input
            type="text"
            name="link-title"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
            placeholder="Título do link"
          />
        </div>

        <div
          class="bg-zinc-950 border border-zinc-800 rounded-lg flex items-center p-4 gap-2 w-full"
        >
          <LinkIcon class="size-5 text-zinc-400" />
          <input
            type="url"
            name="link-url"
            class="bg-transparent text-lg placeholder-zinc-400 flex-1 text-zinc-400"
            placeholder="Insira URL"
          />
        </div>

        <InputButton sizeVariant="full">Salvar link</InputButton>
      </form>
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">
import store, { type Link } from '@/store'
import { useRoute } from 'vue-router'
import { Tag, Link as LinkIcon } from 'lucide-vue-next'
import InputButton from '../InputButton/InputButton.vue'
import ModalOverlay from '../ModalOverlay/ModalOverlay.vue'

const route = useRoute()
const tripId = route.params.tripId

function createLink(e: any) {
  e.preventDefault()

  const data = new FormData(e.currentTarget)
  const linkTitle = data.get('link-title')
  const linkUrl = data.get('link-url')

  const options = {
    title: linkTitle?.toString() || '',
    url: linkUrl?.toString() || ''
  }

  console.log(options)

  fetch(`http://localhost:3333/trips/${tripId}/links`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  })
    .then((res) => res.json())
    .then((data) => {
      const link: Link = {
        ...options,
        id: data.linkId,
        trip_id: tripId as string
      }

      store.mutations.addLink(link)
    })
    .catch((err) => console.error(err))

  props.toogleCreateLinkModal(false)
}

const props = defineProps<{
  toogleCreateLinkModal: (value: boolean) => void
  addToLinkList: (link: Link) => void
}>()
</script>
