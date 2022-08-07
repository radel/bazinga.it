<template>
  <div class="w-full py-4">
    <NuxtLink
      :to="`/blog/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out hover:shadow-md xxlmax:flex-col"
    >
      <img
        v-if="author.img"
        class="h-6 w-6 rounded-full object-cover"
        :src="author.img"
      />
      <div class="flex flex-col ml-4">
        <p class="text-normal font-bold">{{ author.name }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
