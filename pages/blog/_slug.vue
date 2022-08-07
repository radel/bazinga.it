<template>
  <article class="flex flex-wrap w-full">
    <div class="w-full">
      <div
        class="mx-auto max-w-4xl py-4 flex flex-wrap items-center justify-center"
      >
        <div class="flex flex-wrap uppercase text-sm">
          <div class="inline-block mr-4">
            <author :author="article.author" />
          </div>
          <p class="mr-3 py-4 text-gray-800">
            {{ formatDate(article.createdAt) }}
          </p>
        </div>
        <h1 class="text-6xl w-full font-extrabold text-center text-shadow">
          {{ article.title }}
        </h1>
        <p class="w-full text-center text-2xl italic mb-4">
          {{ article.description }}
        </p>

        <div class="w-full text-center">
          <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
              <span
                class="truncate uppercase tracking-relaxed text-xs font-bold px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
              >
                {{ tags[tag].name }}
              </span>
            </NuxtLink>
          </span>
        </div>
      </div>
      <nuxt-img
        :src="article.img"
        :alt="article.alt"
        class="max-w-6xl rounded-md mx-auto shadow-sm object-cover"
      />
    </div>
    <div
      class="w-full flex flex-wrap overflow-y-scroll markdown-body post-right custom-scroll"
    >
      <div class="max-w-4xl mx-auto py-8">
        <!-- table of contents -->
        <nav class="pb-6">
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{
                'font-semibold': link.depth === 2
              }"
            >
              <nuxtLink
                :to="`#${link.id}`"
                class="hover:underline"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3
                }"
                >{{ link.text }}</nuxtLink
              >
            </li>
          </ul>
        </nav>
        <!-- content from markdown -->
        <div class="text-xl leading-8 not-italic">
          <nuxt-content :document="article" />
        </div>
        <p class="pb-4">
          Post last updated: {{ formatDate(article.updatedAt) }}
        </p>
        <!-- content author component -->
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  head() {
    return {
      title: this.article.title
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
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
