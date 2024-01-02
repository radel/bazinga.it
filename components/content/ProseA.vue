<template>
    <iframe width="100%" height="400" :src="`https://www.youtube.com/embed/${youtubeEmbed}`" v-if="isYoutube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <NuxtLink class="text-orange-400" :href="href" :target="target">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: undefined,
        required: false
    }
})
const isYoutube = computed(() => {
    return props.href.includes('youtube.com')
})

const youtubeEmbed = computed(() => {
    return props.href.replace('https://www.youtube.com/watch?v=', '');
})
</script>
