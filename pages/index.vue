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
          <li v-for="bookmark of bookmarks" :key="bookmark.slug"
            class="flex gap-4 items-center w-full border-b border-base-100 py-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
            <a target="_blank" :href="bookmark.source" class="flex justify-between w-full">
              {{ bookmark.title }}
              <span class="opacity-50 text-xs mr-8" v-if="bookmark.clipped">
                {{ new Date(bookmark.clipped).toLocaleDateString()
                  || "" }}
              </span>
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
      'source',
      'clipped'
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
