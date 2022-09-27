<template>
  <article class="flex flex-wrap w-full">
    <div class="w-full">
      <div
        class="mx-auto max-w-4xl py-4 flex flex-wrap items-center justify-center"
      >
        <div class="w-full text-center mb-8" v-if="article.tags">
        <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink :to="`${tags[tag]._path}`">
              <span
                class="truncate uppercase tracking-relaxed text-xs font-extrabold px-2 py-1 mr-2 mb-2 border rounded-full dark:border-slate-600 transition-colors duration-300 ease-linear"
              >
                {{ tag }}
              </span>
            </NuxtLink>
          </span>
        </div>

        <h1 class="text-6xl w-full font-extrabold text-center text-shadow font-body">
          {{ article.title }}
        </h1>
        <p class="w-full text-center text-2xl italic mb-4 py-4 font-body">
          {{ article.description }}
        </p>
        <div class="flex flex-wrap uppercase text-sm">
          <div class="inline-block mr-4">
            <author :author="article.author" />
          </div>
          <p class="mr-3 py-4">
            {{ formatDate(article.createdAt) }}
          </p>
        </div>
      </div>
      <nuxt-img
        :src="article.img"
        :alt="article.alt"
        class="max-w-6xl rounded-md mx-auto shadow-sm object-cover"
      />
    </div>
    <div
      class="w-full flex flex-wrap markdown-body post-right"
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
        <div class="text-xl leading-8 not-italic content font-body">
          <ContentDoc />
        </div>
        <!-- content author component -->
      </div>
    </div>
  </article>
</template>
<script setup>
    const { path} = useRoute()
    const { data: article } = await useAsyncData(`content-${path}`, () => {  return queryContent().where({ _path: path }).findOne()})

    const { data: tagsList } = await useAsyncData('tags', () => queryContent('/tags')
    .where({ name: { $contains: article.tags } })
    .find())
    
    const tags = Object.assign({}, ...tagsList.value.map((s) => ({ [s.name]: s })))  
    

    /*  
    */
    
   
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
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
