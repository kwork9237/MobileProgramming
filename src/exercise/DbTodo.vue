<template>
    <q-page class="bg-grey-3 column">
        <div class="row q-pa-sm bg-primary">
            <q-input
                v-model="newTask"
                @keyup.enter="addDbTask"
                class="col"
                bg-color="white"
                filled
                aria-placeholder="Add Task"
                dense
            >
                <template v-slot:append>
                    <q-btn
                        @click="addDbTask"
                        round
                        dense
                        flat
                        icon="add"></q-btn>
                </template>
            </q-input>
        </div>

        <!-- reset -->
        <q-btn label="reset" @click="resetDB"></q-btn>

        <!-- list -->
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
                    <q-item-label> {{ item.title }} </q-item-label>
                </q-item-section>
                <q-item-section v-if="item.done == 'Y'" side>
                    <q-btn
                        flat round dense
                        color="primary"
                        icon="edit"
                        @click.stop="openDialog(item)"
                    ></q-btn>
                </q-item-section>
                <q-item-section v-if="item.done == 'Y'" side>
                    <q-btn
                        flat round dense
                        color="primary"
                        icon="delete"
                        @click.stop="removeDBItem(item)"
                    ></q-btn>
                </q-item-section>
            </q-item>
            <div v-intersection="onIntersection" v-if="tasks.length"></div>
        </q-list>

        <div v-if="!tasks.legth" class="no-tasks absolute-center">
            <q-icon name="check" size="100px" color="primary"/>
            <div class="text-h5 text-primary text-center">No Tasks</div>
        </div>
        <DialogCustom
            ref="dialog"
            :edit-task="editTask"
            :origin="origin"
            @onInput="editDBTodo"
        >
        </DialogCustom>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import todoApi from "src/apis/todoApi";
import DialogCustom from 'components/DialogCustom.vue'

export default defineComponent({
    name : "Todo",
    title : "DB Todo List",
    components : { DialogCustom },

    data() {
        return {
            newTask : "",
            tasks : [],
            totalCount : 0,
            origin : null,
            editTask : null,
        };
    },
    mounted() { 
        this.fetchData();
        this.list;
    },
    computed : {},
    methods : {
        //추가
        async addDbTask() {
            if(!this.newTask)
                this.$refs.list.focus();

            const payload = { title : this.newTask, };
            const res = await todoApi.create(payload);

            if(res.status == 200) {
                if(res.data.id) {
                    this.tasks.unshift({
                        id : res.data.id,
                        title : this.newTask,
                        done : "N"
                    });
                    this.totalCount++;
                }

                await this.$q.notify({
                    message : `${this.newTask} 추가하셨습니다.`,
                    icon : "home",
                    color : "primary"
                });

                this.newTask = "";
            }
        },

        //가져오기
        async fetchData() {
            const len = 5;
            const lastId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;

            if(this.tasks.length > 0 && this.tasks.length == this.totalCount) {
                console.log("eftchData 호출 안함", this.tasks.length, this.totalCount);
                return false;
            }

            const payload = { lastId, len };
            const res = await todoApi.list(payload);

            if(res.data.list) {
                this.tasks = [...this.tasks, ...res.data.list];
                this.totalCount = res.data.totalCount;
            }
        },

        //수정
        async editDBTodo(item) {
            const idx = this.tasks.findIndex((task) => task == item);
            item.done = "N";
            this.tasks.splice(idx, 1, item);

            if(this.editTask.title != this.origin) {
                await todoApi.update(item);
                await this.$q.notify({
                    message : `${item.title} 수정하셨습니다.`,
                    icon : "home",
                    color : "primary"
                });
            }
        },

        //삭제
        async removeDBItem(item) {
            const idx = this.tasks.findIndex((task) => task.id == item.id);
            this.tasks.splice(idx, 1);

            const result = await todoApi.remove(item);

            if(result.status == 200) {
                await this.$q.notify({
                    message: `${item.title} 삭제하셨습니다.`,
                    icon : "home",
                    color : "primary"
                });
            }
        },

        //더미데이터
        async resetDB() {
            const payload = {
                title : "todo_",
                done : "N",
                len : 100,
            };

            const result = await todoApi.reset(payload);
            if(result.status == 200) {
                console.log(result.status);
                this.fetchData();
            }
        },

        //intersection
        async onIntersection(entry) {
            if (entry.isIntersecting) {
                this.$q.loading.show();
                await this.fetchData();
                this.$q.loading.hide();
            }
        },
        //다이얼로그 열기
        openDialog(item) {
            this.$refs.dialog.dialog = true;
            this.editTask = item;
            this.origin = this.editTask.title;
        },
    },
});
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