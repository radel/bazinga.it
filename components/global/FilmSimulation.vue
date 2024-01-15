<template>
  <div
    class="grid grid-cols-3 rounded-lg border border--base-300/80 dark:border-base-800/80"
  >
    <div class="col-span-1">
      <nuxt-img
        v-if="values.img"
        class="h-96 w-full rounded-l-md object-cover shadow-lg border-base-100"
        loading="lazy"
        format="webp"
        fit="cover"
        width="424px"
        height="256px"
        sizes="sm:100vw md:50vw lg:900px"
        :src="values.img"
        :alt="values.name"
      />
    </div>

    <div class="p-4 grid grid-cols-2 text-base col-span-2">
      <div
        class="col-span-2 text-center mb-4 text-2xl font-bold py-4 bg-base-50/80 dark:bg-base-900/80 text-gray-800 dark:text-base-300"
      >
        {{ name }}
      </div>
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
