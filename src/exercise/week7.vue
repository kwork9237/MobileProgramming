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
            @onInput="editTodo">
        </dialog-custom>

        <!--
            자식을 depth라고 한다. depth가 깊어질수록 복잡해진다.
        -->
    </q-page>
</template>

<script>
import useTodoStore from "src/stores/todo";
import { mapActions, mapState } from "pinia";
import DialogCustom from 'src/components/DialogCustom.vue';

export default {
    components: { DialogCustom },
    name : "Todo",
    title : "Todo List",
    data() {
        return {
            newTask : "",

            //DialogCustom value
            editTask : null,
            origin : null,
        };
    },

    computed : {
        //todo.js의 tasks 값을 가져온다.
        ...mapState(useTodoStore, ["tasks"]),
    },

    mounted() {
        this.listTodo();
    },

    methods : {
        // ... 은 모든 것을 가져온다는 의미이다.
        ...mapActions(useTodoStore, ["insertTodo", "removeTodo", "listTodo", "editTodo"]),
        async addTask() {
            if(this.newTask) {
                //무조건 this로 접근해야 한다.
                this.insertTodo(this.newTask);

                await this.$q.notify({
                    message : `${this.newTask} 추가하셨습니다.`,
                    icon : "home",
                    color : "primary",
                });

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
            this.removeTodo(id);
            this.newTask="";
        },

        openDialog(item) {
            this.$refs.dialog.dialog = true;
            this.editTask = item;
            this.origin = this.editTask.title;
        }
    }
}
</script>

<style lang="scss">
/* scss는 클래스 안에 클래스를 생성할 수 있다. */
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