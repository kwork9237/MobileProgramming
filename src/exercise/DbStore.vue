<template>
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
                        round
                        dense
                        flat
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
                v-ripple
                clickable
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
                        flat
                        round
                        dense
                        color="primary"
                        icon="edit"
                        @click.stop="openDialog(item)"
                    ></q-btn>
                </q-item-section>
                <q-item-section v-if="item.done=='Y'" side>
                    <q-btn
                        flat
                        round
                        dense
                        color="red"
                        icon="delete"
                        @click.stop="removeItem(item.id)"
                    ></q-btn>
                </q-item-section>
            </q-item>
        </q-list>

        <dialog-custom ref="dialog"
            :edit-task="editTask"
            :origin="origin"
            @onInput="editDbStore">
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
        ...mapState(useDbStore, ["tasks", "status", "cnt"]),
    },

    mounted() {
        this.listDbStore();
    },

    methods : {
        ...mapActions(useDbStore, ["insertDbStore", "removeDbStore", "listDbStore", "editDbStore", "resetDbStore", "statusDbStore"]),
        async addTask() {
            if(this.newTask) {
                await this.$q.notify({
                    message : `${this.newTask} 추가하셨습니다.`,
                    icon : "home",
                    color : "primary",
                });

                this.insertDbStore(this.newTask);

                this.newTask = "";
            }

            else {
                await this.$q.notify({
                    message : `내용은 필수 입력입니다.`,
                    icon : "warning",
                    color : "red",
                });
            }
        },

        removeItem(id) {
            this.removeDbStore(id);
            this.newTask="";
        },

        openDialog(item) {
            this.$refs.dialog.dialog = true;
            this.editTask = item;
            this.origin = this.editTask.title;
        },

        async clearItem() {
            this.resetDbStore();

            this.$q.notify({
                message : `작업 초기화 완료`,
                icon : "home",
                color : "primary",
            });
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