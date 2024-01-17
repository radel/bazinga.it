<template>
    <div>
        <div class="mx-auto max-w-5xl">
                <div
                    class="flex p-8 transition-shadow gap-4 mb-8 duration-150 ease-in-out  dark:bg-base-800/80 rounded-md bg-base-100/80 p-4">
                    <div class="w-1/2">
                        <slot>
                            <span class="font-bold text-xl w-full">Ho anche una newsletter, pensa un po'</span>
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
                primary: "rgba(255,255,255,0.8)",
                input: "rgba(255,255,255,0.9)",
                email: "rgba(0,0,0,0.8)",
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
