<template>
  <div class="min-h-screen">
    <the-header />

    <div class="">
      <slot />
        <div class="text-center mx-auto max-w-4xl py-8">
            <a href="/about">about</a> · <a href="https://www.instagram.com/marco__bnm">instagram</a> · <a href="https://www.threads.net/marco__bnm">threads</a> · <a href="https://www.twitter.com/radel">twitter</a>
        </div>
    </div>

    
    <footer
      class="flex justify-center border-base-300 dark:border-base-800 border-t py-4"
    >
      <p class="mt-4">© Marco Bonomo - {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>
