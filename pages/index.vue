<template>
  <div class="pt-24 m-0">
    <div class="max-w-3xl mx-auto px-4">
      <div class="py-4 text-3xl mb-8">
        <ContentDoc />
      </div>
      <PostSection v-if="tags?.length" title="argomenti">
        <div class="col-span-3">
          <span v-for="tag of tags" :key="tag">
            <a :href="tag._path" class="text-xl p-2 md:p-0">{{ tag.name }}</a> ·
          </span>
        </div>
      </PostSection>
      <PostSection v-if="posts?.length" title="note" link="/blog">
        <div v-for="post of posts" :key="post.slug" class="col-span-3">
          <article-card :article="post" />
        </div>
      </PostSection>
      <PostSection v-if="collections?.body.length" title="collezioni" link="/collections">
        <div v-for="collection of collections.body" class="">
          <article-card :article="collection" />
        </div>
      </PostSection>
      <PostSection title="viaggi e fotografie" link="/photos">
        <photo-card :article="photo" v-for="photo of photos" :key="photo.slug" />
      </PostSection>
      <PostSection v-if="bookmarks?.length" title="Segnalibri" link="/">
        <ul class="w-full col-span-3">
          <li v-for="bookmark of bookmarks" :key="bookmark.slug" class="w-full py-2 text-xl">
            <a target="_blank" :href="bookmark.source" class="flex">
              {{ bookmark.title }} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="ml-1 w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>

            </a>
          </li>
        </ul>
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
    .where({ category: { $contains: 'photos' } })
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
    .where({ category: { $contains: 'blog' } })
    .where({ status: { $ne: 'draft' } })
    .sort({ createdAt: -1 })
    .limit(10)
    .find()
)


const { data: bookmarks } = await useAsyncData('bookmarks', () =>
  queryContent()
    .only([
      'title',
      'source'
    ])
    .where({ category: { $contains: 'Clippings' } })
    .sort({ clipped: -1 })
    .limit(1000)
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
const { data: collections } = await useAsyncData('collections', () =>
  queryContent('/collections')
    .findOne()
)
</script>
