<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10 bg-base-800 dark:bg-base-black" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-base-900 dark:bg-base-900 dark:bg-opacity-95 bg-opacity-95 backdrop-blur-sm transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
          <button type="button" class="m-8 absolute md:top-0 right-0 inline-flex justify-center rounded-md text-base-paper p-4 font-medium shadow-sm focus:outline-none sm:w-auto sm:text-sm z-10" @click="open = false" ref="cancelButtonRef">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
        </button>
        <div class="flex min-h-screen items-center justify-center text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 sm:tranzinc-y-0 sm:scale-95" enter-to="opacity-100 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 sm:scale-100" leave-to="opacity-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden unded-lg text-left shadow-xl transition-all h-full mx-8 items-center ">
                <div class="sm:flex sm:items-start ">
                  <div class="mt-3 text-center sm:mt-0  sm:text-left rounded-lg">
                   <slot></slot> 
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
