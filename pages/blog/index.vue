<template>
    <div class="pt-24 m-0">
        <div class="max-w-4xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
const { data: articles } = await useAsyncData('articles', () => queryContent('/blog').only([
    'title',
    'description',
    'img',
    '_path',
    'author',
    'createdAt',
    'tags'
]).sort({ 'createdAt': -1 }).find());
</script>
