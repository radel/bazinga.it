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
            <PostSection title="Photos" link="/photos" label="all travels">
                    <photo-card :article="photo" v-for="photo of photos" :key="photo.slug" />
            </PostSection>
            <div 
              class="flex flex-wrap transition-shadow gap-4 mb-8 duration-150 ease-in-out  dark:bg-zinc-800/80 rounded-md bg-zinc-300/80 p-4"
            >
              <div class="p-8">
                <h4 class="font-bold text-xl w-full">Let's keep in touch!</h4>
                <p>subscribe to my newsletter! </p>
              </div>
              <div id="custom-substack-embed" class="p-8 align-right"></div>
            </div>
            <PostSection v-if="posts.length" title="Blog" link="/blog" label="all posts">
                <div v-for="post of posts" :key="post.slug" class="col-span-3">
                    <article-card :article="post" />
                </div>
            </PostSection>
        </div>

    </div>
</template>

<script setup>
onMounted(() => {
window.CustomSubstackWidget = {
    substackUrl: "marcobnm.substack.com",
    placeholder: "example@gmail.com",
    buttonText: "Subscribe!",
    theme: "custom",
    colors: {
      primary: "#808080",
      input: "#000000",
      email: "#808080",
      text: "#000000",
    }
    }
})

useHead({ 
    title: "Bazinga - Marco Bonomo blog", 
    meta: [{ 
        name: 'description', 
        content: " Hi! I'm Marco: web developer, amateur photographer, mountain wanderer, cooking lover, tinkerer." 
    }],
    script: [
      {
        src: "https://substackapi.com/widget.js",
        body: true,
      }
    ]
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
