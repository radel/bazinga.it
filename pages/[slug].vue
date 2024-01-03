<template>
  <article class="flex flex-wrap w-full pt-24">
    <div class="w-full">
      <div
        class="mx-auto max-w-4xl py-4 flex flex-wrap items-center justify-center"
      >
        <div class="w-full text-left px-8 mb-8" v-if="article.tags">
          <span v-for="(tag, id) in tagsList" :key="id">
            <NuxtLink
              :to="`${tag._path}`"
              v-if="article.tags.indexOf(tag.name) >= 0"
            >
              <span
                class="truncate uppercase tracking-relaxed text-xs font-extrabold px-2 py-1 mr-2 mb-2 border rounded-full dark:border-zinc-600 transition-colors duration-300 ease-linear"
              >
                {{ tag.name }}
              </span>
            </NuxtLink>
          </span>
        </div>

        <div class="px-8 w-full flex flex-wrap">
          <h1
            class="text-3xl w-full font-extrabold text-left text-shadow font-body"
          >
            {{ article.title }}
          </h1>
          <p v-if="article.description" class="w-full text-left text-xl italic mb-4 py-4 font-body">
            {{ article.description }}
          </p>
          <div class="flex flex-wrap text-xl text-left w-full">
            <p class="mr-3 py-4">
              {{ formatDate(article.createdAt) }}  <span class="px-4" v-if="article.category == 'blog'">{{ article.readingTime.text }}</span>  
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap markdown-body post-right">
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
        <div class="text-xl leading-8 not-italic content font-body px-8 img-grid">
          <ContentDoc :path="article._path" />
          
          <div class="mt-8">
              <clientOnly>
                  <SubstackSubscribe> </SubstackSubscribe>
                </clientOnly>
            </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script setup>
const { params } = useRoute()
const { $formatDate } = useNuxtApp()
const { slug } = params
const { data: article } = await useAsyncData(`content-${slug}`, () => {
  return queryContent().where({ slug: slug }).findOne()
})

const { data: tagsList } = await useAsyncData('tags', () =>
  queryContent('/tags')
    .where({ name: { $contains: article.tags } })
    .find()
)

const formatDate = (date) => {
    let current_date = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return current_date.toLocaleDateString('it-IT',options)
}

useHead({
  title: article.title,
  meta: [
    {
      name: 'description',
      content: article.description
    }
  ]
})
</script>
<style>
.content p {
  @apply pb-5;
}

.content h2 {
  font-weight: bold;
  font-size: 28px;
}

.content h3 {
  font-weight: bold;
  font-size: 22px;
}
</style>
