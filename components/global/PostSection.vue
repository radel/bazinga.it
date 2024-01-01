<template>
  <section class="mb-8 py-8 border-b dark:border-zinc-800 border-zinc-300">
    <header
      v-if="title"
      class="flex flex-wrap items-center leading-loose justify-between col-span-1 md:col-span-3 mb-4"
    >
      <NuxtLink :href="link">
        <h3 class="text-2xl dark:text-zinc-400">{{ title }}</h3>
      </NuxtLink>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <slot></slot>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: {
    type: String
  },
  link: {
    type: String
  },
  label: {
    type: String
  }
})
</script>
