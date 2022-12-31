<script setup>
import VLazyImage from "v-lazy-image";
import { slugify } from "../utils"

defineProps({
    quote: Object,
})

const computeAuthor = (quote) => {
    if ('list' in quote) {
        return quote.list.author;
    }

    return quote.chat[0].author;
}
</script>

<template>
    <img :src="quote.cover" alt="" class="lg:h-96 w-full object-cover rounded-lg">
    <div class="inline-flex items-center my-3 text-sm text-gray-900">
        <v-lazy-image class="mr-4 w-16 h-16" :src="`/images/${slugify(quote.game)}.webp`" :alt="`${quote.game} logo`"/>
        <div>
            <p class="text-lg font-semibold text-slate-800">{{ quote.title }}</p>
            <p class="text-sm font-light text-gray-500">{{ quote.date }}</p>
            <p class="text-sm font-light text-gray-500">{{ computeAuthor(quote) }}</p>
        </div>
    </div>
</template>
