<template>
  <div class="grid grid-cols-1 gap-4">
    <h1 v-if="title" class="text-3xl w-full font-extrabold text-left text-shadow font-body">
      {{ title }}
    </h1>
    <div v-for="article of articles" :key="article.slug" class="">
      <article-card :article="article" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title:String,
  collection: String,
  tags: Array
})

const { data: articles } = await useAsyncData('articles', () =>
  queryContent()
    .where({ collection: { $eq: props.collection } })
    .where({ tags: { $contains: props.tags } })
    .where({ status: { $ne: 'draft' } })
    .sort({ createdAt: -1 })
    .find()
)
</script>
