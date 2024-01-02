<template>
  <div class="w-full py-4">
    <span
      class="flex transition-shadow duration-150 ease-in-out hover:shadow-md xxlmax:flex-col"
    >
      <div class="flex flex-col ml-4">
        <p class="text-normal font-bold">{{ author.name }}</p>
      </div>
    </span>
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
