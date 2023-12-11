<template>
    <div>
        <div class="mx-auto max-w-5xl">
                <div
                    class="flex p-8 transition-shadow gap-4 mb-8 duration-150 ease-in-out  dark:bg-zinc-800/80 rounded-md bg-zinc-300/80 p-4">
                    <div class="w-1/2">
                        <slot>
                            <h4 class="font-bold text-xl w-full">Ho anche una newsletter, pensa un po'</h4>
                            <p>Parla di cucina, di codice e di fotografia. Non tutto insieme! </p>
                        </slot>
                    </div>
                    <div id="custom-substack-embed" class="w-1/2 align-right"></div>
                </div>
            </div>        
    </div>
</template>
<script setup>
onMounted(() => {
        window.CustomSubstackWidget = {
            substackUrl: "marcobnm.substack.com",
            placeholder: "iltuonome@example.com",
            buttonText: "iscriviti!",
            theme: "custom",
            colors: {
                primary: "#808080",
                input: "#000000",
                email: "#808080",
                text: "#000000",
            }
        }
})

useHead({
    script: [
        {
            src: "https://substackapi.com/widget.js",
            body: true,
        }
    ]
})
</script>
