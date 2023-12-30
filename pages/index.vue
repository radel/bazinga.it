<template>
  <div class="pt-24 m-0">
    <div class="max-w-4xl mx-auto px-4">
      <div class="py-4 text-3xl mb-8">
        <div class="text-3xl font-bold">Ciao, sono Marco!</div>
        <div class="text-2xl">
          web developer, fotografo amatoriale, alpinista della domenica, cuoco
          casalingo, aspirante agricoltore.
        </div>
      </div>
      <PostSection v-if="tags.length" title="topics">
        <div class="col-span-3">
            <span v-for="tag of tags" :key="tag">
                <a :href="tag._path" >{{ tag.name }}</a> · 
            </span>
        </div>
      </PostSection>
      <PostSection v-if="posts.length" title="blog" link="/blog">
        <div v-for="post of posts" :key="post.slug" class="col-span-3">
          <article-card :article="post" />
        </div>
      </PostSection>
      <PostSection title="viaggi e fotografia" link="/photos">
        <photo-card
          :article="photo"
          v-for="photo of photos"
          :key="photo.slug"
        />
      </PostSection>
      <DefaultSection>
        <clientOnly>
          <SubstackSubscribe> </SubstackSubscribe>
        </clientOnly>
      </DefaultSection>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Bazinga - Marco Bonomo',
  meta: [
    {
      name: 'description',
      content:
        " Hi! I'm Marco: web developer, amateur photographer, mountain wanderer, cooking lover, tinkerer."
    }
  ]
})
const { data: photos } = await useAsyncData('photos', () =>
  queryContent('/photos')
    .only([
      'title',
      'description',
      'img',
      '_path',
      'author',
      'createdAt',
      'tags'
    ])
    .sort({ createdAt: -1 })
    .limit(3)
    .find()
)

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog')
    .only([
      'title',
      'description',
      'img',
      'status',
      'slug',
      'author',
      'createdAt',
      'tags'
    ])
    .where({ status: { $ne: 'draft' } })
    .sort({ createdAt: -1 })
    .limit(3)
    .find()
)

const { data: tags } = await useAsyncData('tags', () =>
    queryContent('/tags')
        .only([
            'slug',
            '_path',
            'name',
            'description'
        ])
        .find()
)
</script>
