<template>
  <div class="m-0">
    <div class="max-w-4xl mx-auto">
      <div class="py-4 px-2 text-3xl">
        Hi! I'm Marco: web developer, amateur photographer, mountain wanderer,
        cooking lover, tinkerer
      </div>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >
          <article-card :article="article" />
        </li>
      </ul>
    </div>
    <footer class="flex justify-center border-gray-500 border-t-2">
      <p class="mt-4">© Marco Bonomo - {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  },
  head() {
    return {
      title: 'Bazinga!'
    }
  }
}
</script>
