<template>
  <div class="grid grid-cols-2 grid-cols-auto gap-4">
    <div v-for="(item, index) in items" :key="index">
      <nuxt-img :src="item" />
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
