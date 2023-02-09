<script setup>
import { GetJournalPage } from '../../../contentful/index';
import { useAsyncData } from "nuxt/app";

const route = useRoute()
const id = route.params.id;

const { data } = await useAsyncData(id, () => GetJournalPage(id));
const PageData = data._rawValue.fields.contentBlocks;
const SizePassHeroData = PageData[0].fields;
console.log(data)
</script>

<template>
    <div>
        <Header/>
        <SizePassHero :sizePassHeroData="SizePassHeroData" />
    </div>
</template>
