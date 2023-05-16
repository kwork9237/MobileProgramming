<template>
    <h1>SignIn Page</h1>
    <SignInForm @onSave="save"></SignInForm>
</template>

<script>
import { defineComponent } from "vue";
import SignInForm from "src/components/auth/SignInForm.vue";

export default defineComponent({
    components : { SignInForm },
    methods : {
        async save() {},
    },
});
</script>

<style>
</style>