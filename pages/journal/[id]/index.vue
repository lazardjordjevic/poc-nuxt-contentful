<script setup>
import { GetJournalPage } from '../../../contentful/index';
import { useAsyncData } from "nuxt/app";

const route = useRoute()
const id = route.params.id;

const { data } = await useAsyncData(id, () => GetJournalPage(id));

</script>

<template>
    <div>
        <Header :post="data"  />
    </div>
</template>