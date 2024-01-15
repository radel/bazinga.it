<template>
    <div class="pt-24 m-0 min-h-screen">
        <div class="max-w-3xl mx-auto px-4">
            <h3 class="font-bold text-xl justify-left text-center mb-8">Collections</h3>
            <div class="grid grid-cols-1 gap-4">
                <div v-for="article of collections.body" :key="article.slug" class="">
                    <article-card :article="article" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const { params } = useRoute()
const { collection } = params

const { data: articles } = await useAsyncData('articles', () => queryContent().only([
    'title',
    'slug',
    '_path',
    'author',
    'createdAt',
    'tags'
])
.where({ collection: {$eq: collection}})
.where({ status: { $ne: 'draft' } })
.sort({ 'createdAt': -1 }).find());

const { data: collections } = await useAsyncData('collections', () =>
    queryContent('/collections')
    .findOne()
)
</script>
