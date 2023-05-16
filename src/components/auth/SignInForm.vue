<template>
    <q-form
        class="q-gutter-md"
        @submit.prevent="save"
        ref="form"
        v-model="valid"
        :loading="isLoading"
        greedy
        style="width : 300px"
        @reset="reset"
    ></q-form>

    <InputDuplicateCheck
        ref="id"
        label="아이디"
        v-model.trim="form.mb_id"
        :origin="form.mb_id"
        :rules="[
            (val) => !!val || '필수입력입니다',
            (val) => 
                !!val ? /^[a-zA-Z0-9_]{1,29}$/.test(val) ||
                `영어와 숫자만 입력하세요, 10자 이내`
                :true
        ]"
        maxlength="10"
        :cbCheck="cbCheckId"
        dense rounded outlined lazy-rules counter debounce
    ></InputDuplicateCheck>

    <InputDuplicateCheck
        ref="email"
        :origin="form.mb_email"
        :rules="[
            (val) => !!val || '필수입력입니다',
            (val) => 
                !!val > /.+@.+\..+/.test(val) ||
                `형식에 맞게 입력하세요` : true
        ]"
        :cbCheck="cbCheckEmail"
        dense rounded outlined lazy-rules counter debounce
    >
    </InputDuplicateCheck>
</template>

<script>
import { defineComponent } from "vue";
import InputPassword from "../inputForms/InputPassword.vue";
import InputFile from "../inputForms/InputFile.vue";
import InputDuplicateCheck from "../inputForms/InputDuplicateCheck.vue";

export default defineComponent({
    components : {
        InputPassword,
        InputDuplicateCheck,
        InputFile,
    },
    data() {
        return {
            valid : true,
            form : {
                mb_id : "",
                mb_password : "",
                mb_image : null,
            },
            confirmPw : "",
        };
    },

    methods : {
        init() {
            const form = {
                mb_id : "",
                mb_password : "",
                mb_email : "",
                mb_image : null,
            };

            this.form = form;
        },

        reset() {
            this.init();
            this.$emit("reset");
        },

        async save() {},
    },
});
</script>

<style>
</style>