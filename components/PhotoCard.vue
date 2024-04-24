<template>
    <div class="mt-4 w-full hover:dark:bg-base-900/50 hover:bg-base-300/50 rounded-md relative">
        <a :href="`/${article.slug}`"
            class="grid grid-cols-3 md:flex md:flex-wrap transition-shadow duration-150 ease-in-out" ⬢ code cdd
            marcobonomo.dev>
            <nuxt-img v-if="article.img"
                class="md:h-96 h-32 w-full rounded-md object-cover shadow-lg border-zinc-100 dark:border-zinc-700 border"
                loading="lazy" format="webp" fit="cover" width="424px" height="256px" decoding="auto"
                sizes="sm:100vw md:50vw lg:900px" :src="article.img" :alt="article.title" />

            <div class="col-span-2 md:flex md:flex-col md:py-2 px-4">
                <h2 class="text-xl mt-2 font-bold capitalize">{{ article.title }}</h2>
                <p class="text-gray-800 dark:text-gray-300 text-normal">
                    {{ article.description }}
                </p>
                <span class="text-sm text-zinc-600 dark:text-zinc-400 py-4">{{ $formatDate(article.createdAt) }} |
                    {{ article.author.name }} |
                    <span>
                        {{ article.tags.join(',') }}
                    </span>
                </span>
            </div>
        </a>
    </div>
</template>

<script setup>
  const props = defineProps({
    article: {
      type: Object,
      default: () => {}
    },
    fullwidth: {
      type: Boolean,
      default: false
    }
  })
  const {$formatDate} = useNuxtApp()
</script>
