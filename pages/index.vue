<template>
  <div class="m-0">
    <div class="max-w-4xl mx-auto px-4">
      <div class="py-4 text-3xl mb-8">
        <strong>
          Hi! I'm Marco: web developer, amateur photographer, mountain wanderer,
          cooking lover, tinkerer.
        </strong>
        <br />
        I shoot film <span class="italic">on</span> digital with a Fuji camera.
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="article of articles"
          :key="article.slug"
          class=""
        >
          <article-card :article="article" />
      </div>
    </div>
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
