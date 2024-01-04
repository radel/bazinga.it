<template>
  <article class="flex flex-wrap w-full pt-24">
    <div class="w-full">
      <div
        class="w-full mx-auto max-w-4xl py-4 flex flex-wrap items-center justify-center"
      >
        

        <div class="px-8 w-full flex flex-wrap">
          <h1
            class="text-3xl w-full font-extrabold text-left text-shadow font-body"
          >
            {{ article.title }}
          </h1>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap markdown-body post-right">
      <div class="max-w-4xl mx-auto w-full py-8">
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
          <ContentDoc />
        </div>
      </div>
    </div>
  </article>
</template>
<script setup>
const { path } = useRoute()
const { data: article } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})


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
