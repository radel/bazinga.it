<template>
    <FilmSimulation :name="article.title" :values="article"></FilmSimulation>
</template>
<script setup>
const props = defineProps({
    article: Object
})
</script>
