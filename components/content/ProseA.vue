<template>
  <iframe
    width="100%"
    height="400"
    :src="`https://www.youtube.com/embed/${youtubeEmbed}`"
    v-if="isYoutube"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <NuxtLink class="items-center inline-flex" :href="href" :target="newTarget">
    <span class="text-orange">
      <slot />
    </span>
    <svg
      v-if="isExternal"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="ml-1 w-3 h-3"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
const isYoutube = computed(() => {
  return props.href.includes('https://www.youtube.com/watch?v=')
})

const youtubeEmbed = computed(() => {
  return props.href.replace('https://www.youtube.com/watch?v=', '')
})

const isExternal = computed(() => {
  if (props.href.includes('http')) return true
  return false
})

const newTarget = computed(() => {
  if (props.href.includes('http')) return '_blank'
  return props.target
})
</script>
