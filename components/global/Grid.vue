<template>
    <!-- <Modal :open="modalVisible" :image="selectedImage" @close="closeModal"></Modal> -->
    <div class="w-full image-grid">
        <ContentSlot :use="$slots.default" />
    </div>
</template>
<script>
import {computed, ref} from 'vue';
import { useUnwrap } from '#imports';

export default {
    setup(props, { slots, attrs })
    {
        const {flatUnwrap} = useUnwrap()

        return {
            slots
        }
    }
}
</script>

<style>
.image-grid p {
  display: flex;
  flex-wrap: wrap;
  margin: 0rem !important;
  justify-content: space-between;
  padding: 0;
  gap: 1rem;
  
  @media screen(md) {
        padding: 0;
        margin: 0rem !important;
        display: flex;
        flex-wrap: nowrap;
    }
}


.image-grid p img {
    max-width: 100%;
    border-radius: 8px;
    
    @media screen(md) {
        padding: 0;
        margin: 0.5rem 0;
        width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
}
</style>
