<template>
  <div class="w-full py-4">
    <NuxtLink
      :to="`/blog/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >
      <img
        v-if="author.img"
        class="h-16 w-16 rounded-full object-cover"
        :src="author.img"
      />
      <div class="flex flex-col m-2 ml-4">
        <p class="text-xl font-bold">{{ author.name }}</p>
        <p>{{ author.bio }}</p>
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
