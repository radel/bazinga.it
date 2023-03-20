<template>
  <div class="mt-4 w-full hover:dark:bg-zinc-900/50 hover:bg-zinc-300/50 rounded-md relative" >
    <NuxtLink :to="`${article._path}`"
      class="flex flex-wrap transition-shadow duration-150 ease-in-out"
    >
      <nuxt-img
        v-if="article.img"
        class="h-96 w-full rounded-md object-cover shadow-lg border-zinc-100 dark:border-zinc-700 border"
        loading="lazy"
        format="webp"
        fit="cover"
        width="424px"                     
        height="256px"
        sizes="sm:100vw md:50vw lg:900px"
        :src="article.img"
        :alt="article.title"
      />

      <div class="flex flex-col py-2 px-4">
        <h2 class="text-xl mt-2 font-bold capitalize">{{ article.title }}</h2>
        <p class="text-gray-800 dark:text-gray-300 text-normal">
          {{ article.description }}
        </p>
        <span class="text-sm text-zinc-600 dark:text-zinc-400 py-4"
          >{{ formatDate(article.createdAt) }} | {{ article.author.name }} |
          <span>
            {{ article.tags.join(',') }}
          </span>
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    fullwidth: {
       type: Boolean,
       default: false
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('it', options)
    }
  }
}
</script>
