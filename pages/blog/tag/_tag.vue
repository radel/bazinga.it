<template>
  <div class="mx-auto max-w-4xl px-2">
    <div class="flex flex-wrap w-full mb-8">
      <h1 class="w-full text-4xl font-bold uppercase mb-4">
        {{ tag.name }}
      </h1>
      <p class="mb-4">{{ tag.description }}</p>
      <nuxt-content :document="tag" />
    </div>
    <div class="w-full">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li v-for="article in articles" :key="article.slug" class="">
          <article-card :article="article" />
        </li>
      </ul>
      <NuxtLink to="/"
        ><p class="mt-8 hover:underline">Back to All Articles</p></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles')
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag
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
