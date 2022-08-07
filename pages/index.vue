<template>
  <div class="m-0">
    <div class="max-w-4xl mx-auto">
      <div class="py-4 px-2 text-3xl mb-8">
        <strong>
          Hi! I'm Marco: web developer, amateur photographer, mountain wanderer,
          cooking lover, tinkerer.
        </strong>
        <br />
        I shoot film <span class="italic">on</span> digital with a Fuji camera.
      </div>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2"
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
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'createdAt',
        'tags'
      ])
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
