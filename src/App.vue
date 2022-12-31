<script setup>
import {onMounted, ref, watch} from "vue";
import { slugify } from "./utils"
import QuoteChat from "./components/QuoteChat.vue";
import QuoteList from "./components/QuoteList.vue";
import QuotePagination from "./components/QuotePagination.vue";
import QuoteMeta from "./components/QuoteMeta.vue";

const quotes = ref([]);
const currentQuote = ref(null);

const currentIndex = ref(0);

onMounted(async () => {
    const response = await fetch("/quotes.json");
    quotes.value = await response.json();
    currentQuote.value = quotes.value[0];
});

watch(currentIndex, () => {
    currentQuote.value = quotes.value[currentIndex.value];
})

const prev = () => {
    currentIndex.value = currentIndex.value === 0 ? 0 : currentIndex.value - 1;
}

const next = () => {
    currentIndex.value = currentIndex.value === quotes.value.length - 1 ? 0 : currentIndex.value + 1;
}
</script>

<template>
    <div v-if="currentQuote"
        class="flex min-h-screen items-center py-5 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/${slugify(currentQuote.game)}-wp.jpg` }"
    >
        <div class="relative mx-auto w-96 lg:w-1/2 rounded-[16px] bg-gray-300 p-[5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div class="relative rounded-[15px] bg-white p-6">
                <QuotePagination :prev="prev" :next="next" />
                <QuoteMeta :quote="currentQuote" />
                <QuoteChat v-if="currentQuote.chat" :chat="currentQuote.chat" />
                <QuoteList v-else :list="currentQuote.list" />
            </div>
        </div>
    </div>
</template>

