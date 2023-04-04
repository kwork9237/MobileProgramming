<template>
    <!-- ShoppingList Page Check -->
    <q-card-section class="row text-center">
        <q-card-section class="col text-h4 text-primary">
            {{ header || "welcome" }}
        </q-card-section>
    </q-card-section>

    <q-list bordered>
        <q-item>
            <q-item-section>
                {{ item.laben }}
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script>
export default {
    name : "ShoppingList",
    title : "쇼핑 리스트",
    data() {
        return {
            header : "Shopping List App"
        }
    }
}
</script>

<style>
</style>