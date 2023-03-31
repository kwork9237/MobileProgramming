<template row>
    <q-list bordered>
        <q-item clickable v-ripple>
            <q-item-section class="row items-start">
                {{ index + 1 }}. {{ item.message }}
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script>
    export default {
        name : "MyComponent",
        props: ["item", "indexz"],
    }
</script>

<style>
</style>