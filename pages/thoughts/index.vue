<template>
    <div class="pt-24 m-0 min-h-screen">
        <div class="max-w-3xl mx-auto px-4">
            <h3 class="font-bold text-xl dark:text-zinc-400 py-2 border-b border-zinc-400 justify-center text-center dark:border-zinc-800 mb-8">Blog</h3>
            <div class="grid grid-cols-1 gap-4">
                <div v-for="article of articles" :key="article.slug" class="">
                    <article-card :article="article" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
useHead({ 
    title: "Bazinga - Marco Bonomo blog", 
    meta: [{ 
        name: 'description', 
        content: " Hi! I'm Marco: web developer, amateur photographer, mountain wanderer, cooking lover, tinkerer." 
    }]
 });
const { data: articles } = await useAsyncData('articles', () => queryContent().only([
    'title',
    'description',
    'img',
    'slug',
    '_path',
    'author',
    'createdAt',
    'tags'
])
.where({ category: {$eq: 'blog'}})
.where({ status: { $ne: 'draft' } })
.sort({ 'createdAt': -1 }).find());
</script>
