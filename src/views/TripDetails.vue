<template>
  <section class="w-full max-w-6xl mx-auto h-screen flex flex-col align items-center py-8">
    <AppHeader>
      <TripInput />
    </AppHeader>

    <main className="w-full max-w-6xl px-4 mx-auto flex gap-16">
      <ActivitiesList toogleCreateActivityModal="{toogleCreateActivityModal}" />

      <aside className="w-80 space-y-6 flex flex-col">
        <LinksList links="{currentTrip?.links}" toogleCreateLinkModal="{toogleCreateLinkModal}" />
        <div className="w-full h-px bg-zinc-800" />
        <GuestsList />
      </aside>
    </main>

    <AppFooter />
  </section>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import TripInput from '@/components/TripInput/TripInput.vue'
import LinksList from '@/components/LinksList/LinksList.vue'
import GuestsList from '@/components/GuestsList/GuestsList.vue'
import ActivitiesList from '@/components/ActivitiesList/ActivitiesList.vue'
import { useRoute } from 'vue-router'

import store from '@/store'

const route = useRoute()

const tripId = route.params.tripId

const loadTrip = async () => {
  await fetch(`http://localhost:3333/trips/${tripId}`)
    .then((res) => res.json())
    .then((data) => store.mutations.updateTrip(data.trip))
    .catch((err) => console.log(err))
}

loadTrip()
</script>
