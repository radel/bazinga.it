<template>
    <!-- <Modal :open="modalVisible" :image="selectedImage" @close="closeModal"></Modal> -->
    <div class="w-full image-grid px-4">
        <div class="image-grid-item" v-for="(item, index) of $slots.default()" :key="index">
            <div class="grid gap-4" :class="{
                'grid-cols-1': getItemLength(item) == 1,
                'grid-cols-2': getItemLength(item) == 2,
                'grid-cols-3': getItemLength(item) == 3,
                'grid-cols-4': getItemLength(item) == 4,
                'grid-cols-5': getItemLength(item) == 5,
                'grid-cols-6': getItemLength(item) == 6,
            }">
                <ContentSlot :use="() => item" unwrap="p"/>
            </div>
        </div>
    </div>
</template>
<script>
import {computed, ref} from 'vue';
import { useUnwrap } from '#imports';

export default {
    setup(props, { slots, attrs })
    {
        const {flatUnwrap} = useUnwrap()

        const getItemLength = (item) => {
            return item.children.default().length;
        }

        return {
            slots,
            getItemLength,
            flatUnwrap
        }
    }
}
</script>

<style>
.image-grid {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
    display: flex;
    flex-wrap: wrap; 
}

.image-grid .image-grid-item {
  display: flex;
  width: 100%;
  margin: 0.5rem 0;
  
  @media screen (md) {
        padding: 0;
    }
}


.image-grid .image-grid-item img {
    border-radius: 8px;
    width: 100%;
    
    @media screen (md) {
        padding: 0;
        object-fit: cover;
    }
}
</style>
