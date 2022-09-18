<template>
    <div class="">

        <the-header />
        
        <div class="pt-32">
            <slot />
        </div>
        
        <footer class="flex justify-center border-gray-200 border-t py-4">
            <p class="mt-4">© Marco Bonomo - {{ new Date().getFullYear() }}</p>
        </footer>
    </div>
</template>
<script setup>
    const colorMode = useColorMode() 

</script>

