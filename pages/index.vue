<template>
  <div class="pt-24 m-0">
    <div class="max-w-3xl mx-auto px-4">
      <div class="py-4 text-3xl mb-8">
          <ContentDoc />
      </div>
      <PostSection v-if="tags.length" title="topics">
        <div class="col-span-3">
            <span v-for="tag of tags" :key="tag">
                <a :href="tag._path" class="text-xl">{{ tag.name }}</a> · 
            </span>
        </div>
      </PostSection>
      <PostSection v-if="posts.length" title="blog" link="/blog">
        <div v-for="post of posts" :key="post.slug" class="col-span-3">
          <article-card :article="post" />
        </div>
      </PostSection>
      <PostSection title="viaggi e fotografie" link="/photos">
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
  queryContent()
    .only([
      'title',
      'description',
      'img',
      'slug',
      'author',
      'createdAt',
      'tags'
    ])
    .where({ category: {$eq: 'photos'}})
    .where({ status: { $ne: 'draft' } })
    .sort({ createdAt: -1 })
    .limit(3)
    .find()
)

const { data: posts } = await useAsyncData('posts', () =>
  queryContent()
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
    .where({ category: {$eq: 'blog'}})
    .where({ status: { $ne: 'draft' } })
    .sort({ createdAt: -1 })
    .limit(10)
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
