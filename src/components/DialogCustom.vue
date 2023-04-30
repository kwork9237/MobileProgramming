<template>
    <q-dialog v-model="dialog">
        <q-card class="q-dialog-plugin">
            <q-card-section>
                <div class="text-h6">내용 수정</div>
                <div class="text-subtitle2"> {{ editTask.id }}</div>
            </q-card-section>
            <q-card-section>
                <q-input
                    v-model="editTask.title"
                    @keyup.enter="onOKClick"
                ></q-input>
            </q-card-section>

            <!-- button example -->
            <q-card-actions align="right">
                <q-btn
                    color="primary"
                    unelevated
                    dense
                    label="OK"
                    @click="onOKClick"
                />
                <q-btn
                    color="primary"
                    unelevated
                    dense
                    label="Cancel"
                    @click="onCancelClick"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    name : "DialogCustom",
    props : ['editTask', 'origin'], //부모에게서 값을 받아온다.
    emits : ['onInput'],

    data() {
        return {
            dialog : false,
        };
    },

    mounted() {},
    watch : {},
    methods : {
        onOKClick() {
            //수정된 데이터를 emit로 oninput라는 이름으로 부모에게 보낸다.
            //emit는 방출하다라는 의미를 가짐'
            if(!this.editTask.title) this.editTask.title = this.origin;
            this.$emit('onInput', this.editTask);
            this.dialog = false;
        },

        onCancelClick() {
            (this.editTask.title = this.origin),
            (this.dialog = false);
        },
    }
});
</script>
<style></style>