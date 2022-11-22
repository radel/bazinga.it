<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10 bg-gray-500 dark:bg-zinc-800" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-800 dark:bg-zinc-800 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto ">
          <button type="button" class="m-8 absolute md:top-0 right-0 inline-flex justify-center rounded-md border border-gray-300 dark:bg-zinc-900 dark:text-white bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm focus:outline-none sm:w-auto sm:text-sm z-10" @click="open = false" ref="cancelButtonRef">close</button>
        <div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 tranzinc-y-4 sm:tranzinc-y-0 sm:scale-95" enter-to="opacity-100 tranzinc-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 tranzinc-y-0 sm:scale-100" leave-to="opacity-0 tranzinc-y-4 sm:tranzinc-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-zinc-100/80 dark:bg-zinc-800/80 text-left shadow-xl transition-all h-full mx-8 items-center ">
                <div class="sm:flex sm:items-start ">
                  <div class="mt-3 text-center sm:mt-0 sm:text-left rounded-lg">
                    <nuxt-img
        v-if="image"
        :src="image"
        loading="lazy"
        format="webp"
        fit="contain"
        class="rounded-lg shadow cursor-pointer object-contain h-screen p-8"
      />
                  </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

   const props = defineProps({
        open: {
            default: false
        },
        image: {
            default: null
        }
    })
</script>
