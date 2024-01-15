<template>
  <div class="grid grid-cols-1 gap-4">
    <h1 class="text-3xl w-full font-extrabold text-left text-shadow font-body">
      {{ content.title }}
    </h1>
    <ContentDoc :path="content._path" />
    <div v-for="article of articles" :key="article.slug" class="">
      <article-card :article="article" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const { data: articles } = await useAsyncData('articles', () =>
  queryContent()
    .where({ collection: { $eq: props.content.collection } })
    .where({ category: { $eq: props.content.collection } })
    .where({ status: { $ne: 'draft' } })
    .sort({ createdAt: -1 })
    .find()
)
</script>
