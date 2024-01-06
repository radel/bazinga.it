<template>
        <article-page 
        :article="article" 
        :tagsList="tagsList" />
</template>
<script setup>
const { params } = useRoute()
const { slug } = params
const { data: article } = await useAsyncData(`content-${slug}`, () => {
    return queryContent().where({ slug: slug }).findOne()
})

const { data: tagsList } = await useAsyncData('tags', () =>
    queryContent('/tags')
        .where({ name: { $contains: article.tags } })
        .find()
)

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
