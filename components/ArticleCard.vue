<template>
  <div class="w-full">
    <NuxtLink :to="`/blog/${article.slug}`"
      class="p-2 flex flex-wrap transition-shadow duration-150 ease-in-out rounded  hover:dark:bg-zinc-600/50 hover:bg-zinc-300/50"
    >
      <div class="flex flex-wrap w-full justify-between">
        <div class="flex items-center">
            <span class="text-md text-zinc-600 dark:text-zinc-400 mr-4"
            >{{ formatDate(article.createdAt) }} 
            </span>
            <h2 class="text-md dark:text-white font-bold capitalize">{{ article.title }}</h2>
        </div>
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
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toDateString('D-MM-YYYY');
    }
  }
}
</script>
