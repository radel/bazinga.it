<template>
  <article>
    <div class="w-full">
      <div class="py-4 flex flex-wrap items-center justify-center">
        <div class="w-full text-left mb-8" v-if="article.tags">
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

        <div class="w-full flex flex-wrap">
          <h1
            class="text-3xl w-full font-extrabold text-left text-shadow font-body"
          >
            {{ article.title }}
          </h1>
          <p
            v-if="article.description && article.category != 'page'"
            class="w-full text-left text-xl italic py-4 font-body"
          >
            {{ article.description }}
          </p>
          <div
            class="flex flex-wrap text-xl text-left w-full"
            v-if="article.category != 'page'"
          >
            <p class="mr-3 py-2" v-if="article.createdAt">
              {{ $formatDate(article.createdAt) }}
              <span class="px-4" v-if="article.category !== 'page'">{{
                article.readingTime.text
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap markdown-body post-right">
      <div class="max-w-4xl w-full mx-auto py-8">
        <!-- table of contents -->
        <nav class="pb-6" v-if="article.toc">
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
        <div class="text-xl leading-8 not-italic content font-body img-grid">
            <component :is="contentType" :article="article">
                <ContentDoc :path="article._path" />
            </component>
        </div>
      </div>
    </div>
  </article>
</template>
<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const { data: tagsList } = await useAsyncData('tags', () =>
  queryContent('/tags')
    .where({ name: { $contains: article.tags } })
    .find()
)

const { $formatDate } = useNuxtApp()

const contentType = computed(() => {
    return props.article.collection ? `${props.article.collection}-content`  : `${category.value}-content`;
})

const category = computed(() => {
    if (props.article.category instanceof Array) {
        return props.article.category[0]
    }
    return props.article.category
})
</script>
