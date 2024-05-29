<template>
    <div class="flex gap-10 lg:mt-20">
        <div class="tabs flex flex-col">
            <div class="tabs__item text-sequel text-white text-xl" v-for="(tab, index) in tabs" :key="index"
                @click="activeTab = index" :class="{ active: activeTab === index }">
                {{ tab.title }}
            </div>
        </div>
        <div class="tab-content">
            <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                <h2 class="text-sequel text-white font-bold text-xl mb-7">{{ tab.heading }}</h2>
                <p class="text-white" v-html="tab.content"></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tabs = ref([
    { title: '1', heading: 'Professionalism and expertise', content: 'Our team includes mobile app developers, web developers, artificial intelligence engineers, application architecture professionals and user experience analysts.<br> Each of us has in-depth knowledge and experience in our field, which allows us to achieve outstanding results within the stipulated time frame.' },
    { title: '2', heading: 'Full cycle of development', content: 'Our team includes mobile app developers, web developers, artificial intelligence engineers, application architecture professionals and user experience analysts.<br> Each of us has in-depth knowledge and experience in our field, which allows us to achieve outstanding results within the stipulated time frame.' },
    { title: '3', heading: 'Constant communication', content: 'Our team includes mobile app developers, web developers, artificial intelligence engineers, application architecture professionals and user experience analysts.<br> Each of us has in-depth knowledge and experience in our field, which allows us to achieve outstanding results within the stipulated time frame.' },
]);

const activeTab = ref(0);
</script>

<style scoped>
.tabs {
    display: flex;
    gap: 1rem;
}

.tabs__item {
    background: url('/images/advantages/4.png');
    width: 47px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tabs__item.active {
    background: url('/images/advantages/5.png');
}

.tabs div {
    cursor: pointer;
}

.tab-content div {
    margin-top: 1rem;
}
</style>