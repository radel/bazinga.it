<template>
        <ContentDoc :path="article._path" />
</template>
<script setup>
const props = defineProps({
    article: Object
})
</script>
