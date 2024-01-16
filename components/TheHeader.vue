<template>
  <header
    class="w-full border-b-base-300 dark:border-b-base-800 border-b py-4 fixed bg-base-paper-200 dark:bg-base-black/80 text-base-black dark:text-base-paper backdrop-blur-sm z-10"
  >
    <div class="max-w-3xl mx-auto flex justify-between px-4 relative">
      <div class="w-fit">
        <a
          href="/"
          class="w-full group flex flex-wrap transition-all h-8 overflow-hidden"
        >
          <h1
            class="w-full text-2xl font-bold opacity-100 hover:opacity-90 transition-all group-hover:-mt-8"
          >
            Marco Bonomo<i class="text-yellow-500 dark:text-zinc-500"></i>
          </h1>
          <h1
            class="w-full text-2xl font-bold opacity-100 hover:opacity-90 transition-all"
          >
            Bazinga<i class="text-yellow-500 dark:text-zinc-500">!</i>
          </h1>
        </a>
      </div>
      <div class="text-right justify-right flex items-center">
        <svg
          @click="toggleMenu()"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 md:hidden mr-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <nav
          class="md:inline-flex z-10 -bottom-50 left-0 bg-base-paper dark:bg-base-black text-base-black dark:text-base-paper absolute md:static w-full md:w-auto items-center gap-4 px-4 capitalize text-xl"
          :class="menuClass"
        >
          <a href="/about">About</a>
          <a href="/now">now</a>
        </nav>
        <color-mode-picker class="opacity-100 hover:opacity-80" />
      </div>
    </div>
  </header>
</template>
<script setup>
import {ref, computed } from 'vue';

const open = ref(false);

const menuClass = computed(() => {
    return {
        'flex flex-col mt-40 p-4 shadow-lg border-t border-b-base-300' : open.value,
        'hidden': !open.value
    }
})

const toggleMenu = () => {
    open.value = !open.value;
}
</script>
