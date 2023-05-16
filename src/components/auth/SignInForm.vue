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
    >
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
            label="이메일"
            hint="ex) orange@orange.co.kr"
            v-model.trim="form.mb_email"
            :origin="form.mb_email"
            :rules="[
                (val) => !!val || '필수입력입니다',
                (val) => 
                    !!val ? /.+@.+\..+/.test(val) || `형식에 맞게 입력하세요` : true
            ]"
            :cbCheck="cbCheckEmail"
            dense rounded outlined lazy-rules counter debounce
        >
            <template v-slot:prepend>
                <q-icon name="mail"/>
            </template>
        </InputDuplicateCheck>

        <InputPassword
            label="비밀번호"
            v-model.trim="form.mb_password"
            :rules="[
                (val) => !!val || '필수입력입니다.',
                (val) =>
                    !!val ? /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(val) ||
                    `특수문자 / 문자 / 숫자 포함 형태의 8 ~ 15자리로 넣어주세요.` : true
            ]"
            hint="특수문자 / 문자 / 숫자 포함 형태의 8 ~ 15자리로 넣어주세요."
            autocomplate="on"
            maxlength="15"
            dense rounded outlined lazy-rules debounce
        ></InputPassword>

        <InputPassword
            label="비밀번호 확인"
            v-model.trim="confirmPw"
            :rules="[
                (val) => !!val || '필수입력입니다.',
                (val) => form.mb_password !== val ?
                    '비밀번호가 일치하지 않습니다.' : true
            ]"
            maxlength="15"
            dense rounded outlined lazy-rules debounce
        ></InputPassword>

        <InputFile
            label="프로필 업로드"
            max-files="1"
            accept=".jpg, .jpeg, .png, image/*"
            hint="프로필 수정"
            v-model="form.mb_iamge"
            dense rounded outlined counter bottom-slot
        ></InputFile>

        <div class="q-pt-md">
            <q-btn unelevated label="Submit" type="submit" color="primary"/>
            <q-btn flat label="Reset" type="reset" color="primary" class="q-ml-sm"/>
        </div>
    </q-form>
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
    emits : ["onSave"],
    props : {
        isLoading : {
            type : Boolean,
            default : false
        },
        cbCheckId : {
            type : Function,
            default : null
        },
        cbCheckEmail : {
            type : Function,
            default : null
        }
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

        async save() {
            this.$refs.form.validate();
            await this.$nextTick();

            if(this.$refs.id.validate()) return;
            if(this.$refs.email.validate()) return;

            const formData = new FormData();
            const keys = Object.keys(this.form);

            for(const key of keys)
                formData.append(key, this.form[key]);

            this.$emit("onSave", formData);
        },
    },
});
</script>

<style>
</style>