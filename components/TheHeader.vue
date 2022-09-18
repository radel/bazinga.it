<template>
  <header class="w-full border-b py-4 mb-4 fixed bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-300 backdrop-blur-sm">
    <div class="max-w-4xl mx-auto flex justify-between">
        <div>
            <NuxtLink to="/">
                <h1 class="text-2xl font-bold px-2">Bazinga!</h1>
            </NuxtLink>
        </div>
      <div>
        <color-mode-picker/>
      </div>
    </div>
  </header>
</template>
