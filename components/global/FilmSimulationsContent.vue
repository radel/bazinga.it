<template>
    <div class="w-full flex flex-wrap">
        <FilmSimulation :name="article.title" :values="article"></FilmSimulation>
    </div>
    <div>
        <ContentDoc :path="article._path" />
    </div>
</template>
<script setup>
const props = defineProps({
    article: Object
})
</script>
