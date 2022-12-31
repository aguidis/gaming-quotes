<script setup>
defineProps({
  chat: Object,
})
</script>

<template>
    <figure v-for="dialog in chat" class="mx-auto max-w-screen-md text-center mb-3">
        <blockquote>
            <p class="text-2xl font-medium text-gray-900">"{{ dialog.quote }}"</p>
        </blockquote>
        <figcaption class="flex justify-center items-center mb-2 space-x-3">
            <div class="flex items-center divide-x-2 divide-gray-500">
                <cite class="pr-3 font-medium text-gray-900 ">{{ dialog.author }}</cite>
            </div>
        </figcaption>
        <p v-if="dialog.stageDirection" class="italic font-medium">*{{ dialog.stageDirection }}*</p>
        <p v-if="dialog.comment">Note perso: {{ dialog.comment }}</p>
    </figure>
</template>
