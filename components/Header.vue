<script setup>
const props = defineProps({ post: Object })
</script>

<template>
    <div>
        Hi im header
        {{ props }}
    </div>
</template>