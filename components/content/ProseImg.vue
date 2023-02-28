<template>
    <NuxtImg v-bind="$attrs"    
        fit="cover"
        class="w-full rounded shadow cursor-pointer"
        sizes="sm:100vw md:50vw lg:900px"
        :modifiers="{rotate: null}"
        format="webp"
    />
</template>
