<template>
  <header
    class="w-full max-w-6xl flex flex-col items-center justify-center mx-auto gap-2 px-4 mb-8"
  >
    <RouterLink
      to="/"
      class="w-full flex items-center space-x-4 flex-col md:flex-row justify-center mb-8"
    >
      <img src="@/assets/images/logo.svg" alt="Planner logo" />
      <p class="text-sm text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
    </RouterLink>
    <slot />
  </header>
</template>

<script setup lang="ts"></script>
