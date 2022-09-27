<template>
  <header class="w-full border-b-slate-300 dark:border-b-slate-600 border-b py-4 mb-4 fixed bg-stone-200/80 dark:bg-slate-800/80 text-gray-800 dark:text-slate-300 backdrop-blur-sm">
    <div class="max-w-4xl mx-auto flex justify-between px-4">
        <div>
            <NuxtLink to="/">
                <h1 class="text-2xl font-bold opacity-100 hover:opacity-90">Bazinga<i class="text-yellow-500 dark:text-slate-500">!</i></h1>
            </NuxtLink>
        </div>
      <div>
        <color-mode-picker class="opacity-100 hover:opacity-80"/>
      </div>
    </div>
  </header>
</template>
