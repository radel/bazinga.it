<template>
    <Modal :open="modalVisible" v-bind="$attrs" @close="closeModal">
        <nuxt-img
            v-bind="$attrs"  
            loading="lazy"
            format="webp"
            fit="contain"
            sizes="sm:100vw md:100vw lg:2000px"
            :modifiers="{rotate: null}"
            class="rounded-lg shadow cursor-pointer object-contain h-full"
          />
    </Modal>
    <NuxtImg v-bind="$attrs"    
        fit="cover"
        loading="lazy"
        class="w-full rounded shadow cursor-pointer"
        sizes="sm:100vw md:50vw lg:900px"
        @click="showModal(item)"
        :modifiers="{rotate: null}"
        format="webp"
    />
</template>
<script setup>
import { ref } from 'vue'
const modalVisible = ref(false)
const showModal = () => {
    modalVisible.value = true
}

const closeModal = () => {
    modalVisible.value = false
}
</script>
