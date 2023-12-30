<template>
  <div class="mx-auto max-w-4xl min-h-screen pt-32 px-4">
    <div class="flex flex-wrap w-full mb-8" v-if="tag">
      <h1 class="w-full text-2xl mb-4">
        {{ tag.name }}
      </h1>
      <p class="mb-4">{{ tag.description }}</p>
    </div>
    <div class="w-full">
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="article in tagArticles" :key="article._path" class="">
          <article-card :article="article" />
        </li>
      </ul>
      <NuxtLink to="/"
        ><p class="mt-8 hover:underline">Back to All Articles</p></NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
    const { params, path } = useRoute()
    
    const { data: tag } = await useAsyncData('tag', () => queryContent('/tags')
    .where({_path: path})
    .findOne())
    
    const { data: tagArticles } = await useAsyncData(`articles-${params.tag}`, () => {  return queryContent().where({ 'tags': { $contains: tag.value.name } })
    .sort({'createdAt': -1})
    .find()})

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        let current_date = new Date(date);
        let month = current_date.getMonth() + 1;
        let prepend = month < 10 ? 0 : "";
        return `${current_date.getFullYear()} · ${prepend}${month}`;
    }
</script>
