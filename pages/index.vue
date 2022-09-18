<template>
  <div class="m-0">
    <div class="max-w-4xl mx-auto">
      <div class="py-4 px-2 text-3xl mb-8">
        <strong>
          Hi! I'm Marco: web developer, amateur photographer, mountain wanderer,
          cooking lover, tinkerer.
        </strong>
        <br />
        I shoot film <span class="italic">on</span> digital with a Fuji camera.
      </div>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2"
        >
          <article-card :article="article" />
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script setup>
        const { data: articles } = await useAsyncData('articles', () => queryContent('/blog').only([
            'title',
            'description',
            'img',
        '_path',
        'author',
        'createdAt',
        'tags'
    ]).sort({'createdAt': -1}).find());
</script>
