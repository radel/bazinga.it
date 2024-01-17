<template>
    <div class="w-full mt-24">
        <PostSection title="pagine che portano qui" v-if="backlinks.length">
            <div class="col-span-3">
                <div v-for="backlink in backlinks" class="mb-4">
                    <article-card :article="backlink" />
                </div>
            </div>
        </PostSection>    
    </div>
</template>
<script setup>
const props = defineProps({
    slug: String
})
const { data } = await useAsyncData(async () => queryContent().where({ slug: { $ne: props.slug } }).find());
const backlinks = data.value?.filter(({ outgoingLinks }) => outgoingLinks?.some(({ _to }) => _to === props.slug));
</script>
