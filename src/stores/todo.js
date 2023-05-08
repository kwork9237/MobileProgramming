import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from "quasar"; //config -> plugins에 넣는다.
import todoApi from "src/apis/todoApi";

export default defineStore("useTodo", {
    state:() => ({
        tasks:[],
    }),
    
    getters : {

    },

    actions : {
        insertTodo(title) {
            //값이 있는지, 없는지에 따라 다르다.
            if(this.tasks) {
                this.tasks.unshift({
                    id : uid(),
                    title,
                    done : 'N'
                });
            }

            else {
                this.tasks = [];
                this.tasks.push({
                    id : uid(), //uid는 퀘이사에서 기본 제공
                    title,
                    done : 'N' //기본 키값을 넣어줌
                })
            }

            LocalStorage.set("todo", this.tasks);
        },

        removeTodo(id) {
            const idx = this.tasks.findIndex(task=>task.id == id);
            this.tasks.splice(idx, 1);
            LocalStorage.set("todo", this.tasks);
        },

        listTodo() {
            this.tasks = LocalStorage.getItem("todo");
        },

        editTodo(item) {
            //task에서 item과 같은 것을 찾아서 인덱스로 변환
            const idx = this.tasks.findIndex(task => task == item);
            item.done = 'N';

            //splice로 수정된 아이템 저장
            this.tasks.splice(idx, 1, item);
            LocalStorage.set("todo", this.tasks);
        },
    }
})