<template>
  <div class="mt-4 w-full">
    <NuxtLink :to="`${article._path}`"
      class="flex flex-wrap transition-shadow duration-150 ease-in-out  hover:dark:bg-zinc-600/50 hover:bg-zinc-300/50 dark:bg-zinc-800 rounded-md bg-zinc-300 p-4"
    >
      <div class="flex flex-wrap w-full justify-between py-2 px-4">
        <div>
            <span class="text-sm text-zinc-600 dark:text-zinc-400 py-4"
            >{{ formatDate(article.createdAt) }} 
            </span>
            <h2 class="text-xl mt-2 dark:text-white font-bold capitalize">{{ article.title }}</h2>
            <p class="text-gray-800 dark:text-gray-300 text-normal">
                {{ article.description }}
            </p>
        </div>
        <div>
            read
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
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
