<template>
  <section class="mb-8 py-8 border-b dark:border-base-800 border-base-300">
    <header
      v-if="title"
      class="flex flex-wrap items-center leading-loose justify-between col-span-1 md:col-span-3 mb-4"
    >
      <NuxtLink :href="link" v-if="link">
        <h2 class="text-2xl dark:text-base-400">{{ title }}</h2>
      </NuxtLink>
      <h2 v-else class="text-2xl dark:text-base-400">{{ title }}</h2>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
