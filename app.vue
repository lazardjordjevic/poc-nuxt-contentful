<script setup>
definePageMeta({
    middleware: ["auth"]
})
</script>

<template>
    <div>
        <Header />
        <!-- <NuxtWelcome /> -->
        <NuxtPage />
    </div>
</template>