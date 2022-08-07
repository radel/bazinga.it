<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="{ 'col-span-2': item.landscape }"
    >
      <nuxt-img
        v-if="item.landscape"
        :src="item.img"
        loading="lazy"
        format="webp"
        fit="cover"
        sizes="sm:100vw md:50vw lg:900px"
        :title="item"
      />
      <nuxt-img
        v-else
        :src="item"
        format="webp"
        fit="cover"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:440px"
        :title="item"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {}
}
</script>
