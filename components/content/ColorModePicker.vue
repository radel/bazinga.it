<template>
    <div>
        <icon-dark class="dark:hidden block cursor-pointer" @click="$colorMode.preference = 'dark'"></icon-dark>
        <icon-light class="hidden dark:block cursor-pointer" @click="$colorMode.preference = 'light'"></icon-light>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const setColorMode = (mode) => {
    console.log(colorMode)
    colorMode.preference = mode;
    console.log(colorMode.preference)

}
</script>

