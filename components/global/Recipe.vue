<template>
    <div class="grid grid-cols-2 max-w-xl my-4 mx-auto rounded-lg border text-base gap-2 border-zinc-300/80 dark:border-zinc-800/80">
        <div class="col-span-2 text-center text-2xl font-bold py-4 bg-zinc-300/80 dark:bg-zinc-800/80 text-gray-800 dark:text-zinc-300">{{ name }}</div>

        <div class="px-2 font-bold">Film Simulation</div>
        <div>{{ values.FilmMode }}</div>

        <div class="px-2 font-bold">Dynamic Range</div>
        <div>{{ values.DynamicRangeSetting }}</div>

        <div class="px-2 font-bold">Grain Effect</div>
        <div>{{ values.GrainEffect }}</div>

        <div class="px-2 font-bold">White Balance</div>
        <div>{{ values.WhiteBalance }} {{ values.WhiteBalanceFineTune }}</div>

        <div class="px-2 font-bold">Highlights</div>
        <div>{{ values.HighlightTone }}</div>

        <div class="px-2 font-bold">Shadows</div>
        <div>{{ values.ShadowTone }}</div>

        <div class="px-2 font-bold">Sharpening</div>
        <div>{{ values.Sharpness }}</div>

        <div class="px-2 font-bold">Noise Reduction</div>
        <div>{{ values.NoiseReduction }}</div>

        <div class="col-span-2 p-2 text-xs bg-zinc-300/80 dark:bg-zinc-800/80 text-gray-800 dark:text-zinc-300">
                Questi sono metadati EXIF, non sono equivalenti alle impostazioni della fotocamera. 
                Per trovare il giusto bilanciamento del bianco, dividi per 20 i valori di rosso e blu.
        </div>
    </div>
</template>

<script setup>
defineProps({
    values: {
        type: Object,
        default: () => {}
    },
    name: {
        type: String,
        default: 'Custom Recipe'
    }
})
</script>
