<template>
  <div class="grid grid-cols-1 gap-4 w-full">
    <a
      :href="`${path}`"
      class="p-2 -m-2 flex flex-wrap transition-shadow duration-150 ease-in-out rounded hover:dark:bg-zinc-600/50 hover:bg-zinc-300/50"
    >
      <div class="flex flex-wrap w-full justify-between">
        <div class="flex items-center text-xl">
          <span v-if="article.createdAt" class="text-zinc-600 dark:text-zinc-400 mr-4 min-w-16 text-sm md:text-xl"
            >{{ $formatDate(article.createdAt) }}
          </span>
          <h2 class="dark:text-white underline">{{ article.title }}</h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
    const {$formatDate} = useNuxtApp()
  const props = defineProps({
      article: {
    type: Object,
    default: () => {}
  },
})

const path = computed(() => {
    return `/${props.article.slug}`
})

</script>
