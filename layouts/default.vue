<template>
    <div class="">

        <the-header />
        
        <div>
            <slot />
        </div>
        
        <footer class="flex justify-center border-gray-200 dark:border-gray-800  border-t py-4 ">
            <p class="mt-4">© Marco Bonomo - {{ new Date().getFullYear() }}</p>
        </footer>
    </div>
</template>

