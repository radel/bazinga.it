<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div v-for="(item, index) in items" :key="index">
      <nuxt-img :src="item" sizes="sm:100vw md:50vw lg:440px" :title="item" />
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
  }
}
</script>
