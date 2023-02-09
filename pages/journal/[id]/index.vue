<script setup>
import { GetJournalPage } from '../../../contentful/index';
import { useAsyncData } from "nuxt/app";

const route = useRoute()
const id = route.params.id;

const { data } = await useAsyncData(id, () => GetJournalPage(id));
const PageData = data._rawValue.fields.contentBlocks;
const SizePassHeroData = PageData[0].fields;
const TitleData = PageData[1].fields;

console.log(data)
</script>

<template>
    <div>
        <Header />
        <SizePassHero :sizePassHeroData="SizePassHeroData" />
        <div class="fitroom-wrap">
            <TitleComponent :titleData="TitleData" />
            <RainbowCard :rainbowCardData="RainbowCardData" />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.fitroom-wrap {
    display: flex;
    align-items: center;
    max-width: 1210px;
    margin: 0 auto;
    padding: 200px 0;
}
</style>
