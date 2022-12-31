<script setup>
defineProps({
  list: Object,
})
</script>

<template>
    <p class="mb-5">{{ list.context }}</p>
    <h3 class="text-2xl text-center font-medium mb-3">{{ list.title }}</h3>
    <figure v-for="item of list.items" class="mx-auto max-w-screen-md text-center">
        <blockquote>
            <p class="text-xl italic text-gray-900">{{ item }}</p>
        </blockquote>
    </figure>
</template>
