<template>
<!--    <div v-if="!this.loginStatus">-->
    <q-page class="bg-grey-3 column">
        <div class="row q-pa-sm bg-primary">
            <q-input
                v-model="newTask"
                @keyup.enter="addTask"
                class="col"
                bg-color="white"
                filled
                aria-placeholder="Add Task"
                dense
            >
                <template v-slot:append>
                    <q-btn
                        @click="addTask"
                        round dense flat
                        icon="add"
                    ></q-btn>
                </template>
            </q-input>
        </div>

        <q-btn label="reset" @click="clearItem()"></q-btn>

        <q-list class="bg-white" separator bordered>
            <q-item
                v-for="item in tasks"
                :key="item.title"
                @click="item.done = item.done == 'Y' ? 'N' : 'Y'" 
                :class="{ 'done bg-blue-1' : item.done == 'Y'}"
                v-ripple clickable
            >
                <q-item-section avatar>
                    <q-checkbox
                        v-model="item.done"
                        color="primary"
                        class="no-pointer-event"
                        true-value="Y"
                        false-value="N"
                        dense
                    ></q-checkbox>
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        {{ item.title }}
                    </q-item-label>
                </q-item-section>
                <q-item-section v-if="item.done=='Y'" side>
                    <q-btn
                        flat round dense
                        color="primary"
                        icon="edit"
                        @click.stop="openDialog(item)"
                    ></q-btn>
                </q-item-section>
                <q-item-section v-if="item.done=='Y'" side>
                    <q-btn
                        flat round dense
                        color="red"
                        icon="delete"
                        @click.stop="removeItem(item)"
                    ></q-btn>
                </q-item-section>
            </q-item>
        </q-list>

        <dialog-custom ref="dialog"
            :edit-task="editTask"
            :origin="origin"
            @onInput="updateItem">
        </dialog-custom>
    </q-page>
</template>

<script>
import useDbStore from "src/stores/DbStore";
import { mapActions, mapState } from "pinia";
import DialogCustom from 'src/components/DialogCustom.vue';

export default {
    components: { DialogCustom },
    name : "Db",
    title : "Db List",
    data() {
        return {
            newTask : "",

            //DialogCustom value
            editTask : null,
            origin : null,
        };
    },

    computed : {
        ...mapState(useDbStore, ["tasks"]),
    },

    mounted() {
        this.listDbStore();
    },

    methods : {
        ...mapActions(useDbStore, ["insertDbStore", "removeDbStore", "listDbStore", "editDbStore", "resetDbStore", "statusDbStore"]),
        //create
        addTask() {
            if(this.newTask) {
                if(this.insertDbStore(this.newTask)) {
                    this.$q.notify({
                        message : `${this.newTask} 추가하셨습니다.`,
                        icon : "home",
                        color : "primary",
                    });
                    this.newTask = "";
                }
                else {
                    this.$q.notify({
                        message : `DB 입력 실패`,
                        icon : "warning",
                        color : "red",
                    });
                }
            }

            else {
                this.$q.notify({
                    message : `내용은 필수 입력입니다.`,
                    icon : "warning",
                    color : "red",
                });
            }
        },

        //read
        readItem() {
            this.listDbStore();
        },

        //update
        updateItem(item) {
            if(this.editDbStore(item)) {
                this.$q.notify({
                    message: `수정 성공`,
                    icon : "home",
                    color : "primary"
                });
            }

            else {
                this.$q.notify({
                    message: `수정 실패`,
                    icon : "warning",
                    color : "red"
                });
            }
        },

        openDialog(item) {
            this.$refs.dialog.dialog = true;
            this.editTask = item;
            this.origin = this.editTask.title;
        },

        //delete
        removeItem(item) {
            const res = this.removeDbStore(item);
            this.newTask="";

            if(res) {
                this.$q.notify({
                    message: `${item.title} 삭제하셨습니다.`,
                    icon : "home",
                    color : "primary"
                });
            }

            else {
                this.$q.notify({
                    message: `${item.title} 삭제 실패.`,
                    icon : "warning",
                    color : "red"
                });
            }
        },

        //reset
        clearItem() {
            const res = this.resetDbStore();

            if(res) {
                this.$q.notify({
                    message : `DB 초기화 완료`,
                    icon : "home",
                    color : "primary",
                });
            }

            else {
                this.$q.notify({
                    message : `DB 초기화 실패`,
                    icon : "warning",
                    color : "red",
                });
            }
        },

  
    }
}
</script>

<style lang="scss">
    .done {
        .q-item__label {
            text-decoration: line-through;
            color: #bbb;
        }
    }

    .no-tasks {
        opacity: 0.5;
    }
</style>