<template>
  <div class="mt-4 w-full">
    <NuxtLink :to="`${article._path}`"
      class="flex flex-wrap transition-shadow duration-150 ease-in-out"
    >
      <nuxt-img
        v-if="article.img"
        class="h-64 w-full rounded-md object-cover shadow-lg border-stone-100 dark:border-slate-700 border"
        :src="article.img"
      />

      <div class="flex flex-col py-2 px-4">
        <h2 class="text-xl mt-2 font-bold capitalize">{{ article.title }}</h2>
        <p class="text-gray-800 dark:text-gray-300 text-normal">
          {{ article.description }}
        </p>
        <span class="text-sm text-stone-600 dark:text-slate-400 py-4"
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
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
