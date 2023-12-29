<template>
  <section class="mb-8 border-b dark:border-zinc-800 border-zinc-300">
    <slot></slot>
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
