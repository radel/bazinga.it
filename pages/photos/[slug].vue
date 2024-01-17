<template>
        <meta http-equiv="refresh" :content="`0;url=/${slug}`">
</template>
<script setup>
const { params } = useRoute()
const { slug } = params

</script>
