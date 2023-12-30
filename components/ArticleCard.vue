<template>
  <div class="grid grid-cols-1 gap-4 w-full">
    <NuxtLink :to="`${article._path}`"
      class="p-2 -m-2 flex flex-wrap transition-shadow duration-150 ease-in-out rounded  hover:dark:bg-zinc-600/50 hover:bg-zinc-300/50"
    >
      <div class="flex flex-wrap w-full justify-between">
        <div class="flex items-center">
            <span class="text-md text-zinc-600 dark:text-zinc-400 mr-4"
            >{{ formatDate(article.createdAt) }} 
            </span>
            <h2 class="text-md dark:text-white underline">{{ article.title }}</h2>
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
      let current_date = new Date(date);
      let month = current_date.getMonth() + 1;
      let prepend = month < 10 ? 0 : "";
      return `${current_date.getFullYear()} · ${prepend}${month}` ;
    }
  }
}
</script>
