<template>
  <div class="mt-4 w-full">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="flex flex-wrap transition-shadow duration-150 ease-in-out"
    >
      <img
        v-if="article.img"
        class="h-64 w-full rounded-md object-cover"
        :src="article.img"
      />

      <div class="flex flex-col">
        <h2 class="text-xl mt-2 font-bold capitalize">{{ article.title }}</h2>
        <p class="text-gray-800 text-normal">
          {{ article.description }}
        </p>
        <span class="text-sm text-gray-500 py-4"
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
