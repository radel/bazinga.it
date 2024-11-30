<template>
  <div class="w-full flex rounded-lg border border--base-300/80 dark:border-base-800/80">
    <div class="p-4 grid grid-cols-2 w-full text-base">
      <div
        class="col-span-2 text-center mb-4 text-2xl font-bold py-4 bg-base-50/80 dark:bg-base-900/80 text-gray-800 dark:text-base-300">
        {{ name }}
      </div>
      <div class="px-2 font-bold">Film Simulation</div>
      <div>{{ values['FilmMode'] }}</div>

      <div class="px-2 font-bold">Dynamic Range</div>
      <div>{{ values['DynamicRangeSetting'] }}</div>

      <div class="px-2 font-bold">Grain Effect</div>
      <div>{{ values['GrainEffect'] }}</div>

      <div v-if="values['ColorChromeEffect']" class="px-2 font-bold">Color Chrome Effect</div>
      <div v-if="values['ColorChromeEffect']">{{ values['ColorChromeEffect'] }}</div>

      <div class="px-2 font-bold">White Balance</div>
      <div>{{ values['WhiteBalance'] }} {{ values['WhiteBalanceFineTune'] }}</div>

      <div class="px-2 font-bold">Highlight Tone</div>
      <div>{{ values['HighlightTone'] }}</div>

      <div class="px-2 font-bold">Shadow Tone</div>
      <div>{{ values['ShadowTone'] }}</div>

      <div class="px-2 font-bold">Sharpness</div>
      <div>{{ values.Sharpness }}</div>

      <div v-if="values['Color']" class="px-2 font-bold">Color</div>
      <div v-if="values['Color']">{{ values['Color'] }}</div>

      <div class="px-2 font-bold">Noise Reduction</div>
      <div>{{ values['NoiseReduction'] }}</div>

      <div v-if="values.Clarity" class="px-2 font-bold">Clarity</div>
      <div v-if="values.Clarity">{{ values.Clarity }}</div>


      <div v-if="values['Color Chrome Effect Blue']" class="px-2 font-bold">Color Chrome Fx Blue</div>
      <div v-if="values['Color Chrome Effect Blue']">{{ values['Color Chrome Effect Blue'] }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  values: {
    type: Object,
    default: () => { }
  },
  name: {
    type: String,
    default: 'Custom Recipe'
  }
})
</script>
