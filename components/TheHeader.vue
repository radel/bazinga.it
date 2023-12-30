<template>
  <header class="w-full border-b-zinc-300 dark:border-b-zinc-600 border-b py-4 fixed bg-zinc-200/80 dark:bg-zinc-800/80 text-gray-800 dark:text-zinc-300 backdrop-blur-sm z-10">
    <div class="max-w-4xl mx-auto flex justify-between px-4">
        <div class="w-full">
            <NuxtLink to="/" class="w-full group flex flex-wrap transition-all h-8 overflow-hidden">
                <h1 class="w-full text-2xl font-bold opacity-100 hover:opacity-90 transition-all group-hover:-mt-8">Marco Bonomo<i class="text-yellow-500 dark:text-zinc-500"></i></h1>
                <h1 class="w-full text-2xl font-bold opacity-100 hover:opacity-90 transition-all">Bazinga<i class="text-yellow-500 dark:text-zinc-500">!</i></h1>
            </NuxtLink>
        </div>
      <div class="text-right justify-right">
        <color-mode-picker class="opacity-100 hover:opacity-80"/>
      </div>
    </div>
  </header>
</template>
