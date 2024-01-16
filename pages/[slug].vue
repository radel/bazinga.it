<template>
  <div class="flex flex-wrap w-full pt-24 mx-auto max-w-3xl px-4">
    <collection-page
      :content="article"
      v-if="article.category === 'collections'"
    />
    <content-page :article="article" :tagsList="tagsList" v-else />
  </div>
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
    },
    {
      name: 'author',
      content: article.author
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
