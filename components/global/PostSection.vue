<template>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <header class="flex flex-wrap items-center leading-loose justify-between py-4 border-b dark:border-zinc-600 col-span-1 md:col-span-3">
                    <h3 class="font-bold text-xl dark:text-zinc-400">{{title}}</h3>
                    <NuxtLink :href="link" class="uppercase dark:text-zinc-600 font-bold text-sm ">{{label}}</NuxtLink>
                </header>
                <slot></slot>
            </section>
</template>
<script setup>
 defineProps({
    title: {
        type: String,
    },
    link: {
        type: String
    },
    label: {
        type: String
    }
 })

</script>
