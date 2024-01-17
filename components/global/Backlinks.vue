<template>
    <div class="w-full mt-24ar">
            <h3 class="text-2xl dark:text-base-600 mb-4">Pagine che portano qui</h3>
            <div class="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a :href="backlink.slug" :key="index" v-for="(backlink,index) in backlinks" class="border border-base-300 dark:border-base-700 p-4 rounded hover:bg-base-300 dark:hover:bg-base-900">
                    <h2>{{ backlink.title }}</h2>
                    <p class="text-base-600 dark:text-base-600">{{ backlink.description }}</p>
                </a>
            </div>
    </div>
</template>
<script setup>
const props = defineProps({
    slug: String
})
const { data } = await useAsyncData(async () => queryContent().where({ slug: { $ne: props.slug } }).find());
const backlinks = data.value?.filter(({ outgoingLinks }) => outgoingLinks?.some(({ _to }) => _to === props.slug));
</script>
