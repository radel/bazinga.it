<template>
    <div class="pt-24 m-0">
        <div class="max-w-4xl mx-auto px-4">
            <div class="py-4 text-3xl mb-8">
                <strong>
                    Hi! I'm Marco: web developer, amateur photographer, mountain wanderer,
                    cooking lover, tinkerer.
                </strong>
                <br />
                I shoot film <span class="italic">on</span> digital with a Fuji camera.
            </div>
            <PostSection title="Photos" link="/photos" label="all travel">
                    <photo-card :article="photo" v-for="photo of photos" :key="photo.slug" />
            </PostSection>
            <PostSection v-if="posts.length" title="Blog" link="/blog" label="all posts">
                <div v-for="post of posts" :key="post.slug" class="col-span-3">
                    <article-card :article="post" />
                </div>
            </PostSection>
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
const { data: photos } = await useAsyncData('photos', () => queryContent('/photos').only([
    'title',
    'description',
    'img',
    '_path',
    'author',
    'createdAt',
    'tags'
]).sort({ 'createdAt': -1 }).limit(3).find());

const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').only([
    'title',
    'description',
    'img',
    'status',
    '_path',
    'author',
    'createdAt',
    'tags'
]).where({status: {$ne: 'draft'}}).sort({ 'createdAt': -1 }).limit(3).find());
</script>
