<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Modal :open="modalVisible" :image="selectedImage" @close="closeModal"></Modal>
      <div
      v-for="( item, index) in items"
      :key="index"
      :class="{ 'col-span-2': item.landscape }"
    >
       <nuxt-img
        v-if="item.landscape"
        :src="item.img"
        loading="lazy"
        format="webp"
        @click="showModal(item.img)"
        fit="cover"
        class="rounded shadow cursor-pointer"
        sizes="sm:100vw md:50vw lg:900px"
        :title="item"
      />
      <nuxt-img
        v-else
        :src="item"
        @click="showModal(item)"
        format="webp"
        fit="cover"
        loading="lazy"
        class="rounded shadow cursor-pointer"
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
  data() {
    return {
        modalVisible: false,
        selectedImage: null
    }
  },
  methods: {
    showModal(image) {
        this.selectedImage = image;
        this.modalVisible = true;
    },
    closeModal()
    {
        this.selectedImage = null;
        this.modalVisible = false;
    }
  }
}
</script>
