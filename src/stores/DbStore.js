import { defineStore } from "pinia";

export default defineStore("useDbStore", {
    state:() => ({
        tasks:[],
        status : false,
        cnt : 1,
    }),
    
    getters : {
    },

    actions : {
        insertDbStore(title) {
            //값이 있는지, 없는지에 따라 다르다.
            if(this.tasks) {
                this.tasks.unshift({
                    id : this.cnt,
                    title,
                    done : 'N'
                });
            }

            else {
                this.tasks = [];
                this.tasks.push({
                    id : this.cnt, //uid는 퀘이사에서 기본 제공
                    title,
                    done : 'N' //기본 키값을 넣어줌
                })
            }

            this.cnt += 1;
        },

        removeDbStore(id) {
            const idx = this.tasks.findIndex(task => task.id == id);
            this.tasks.splice(idx, 1);

            this.cnt -= 1;
        },
        
        resetDbStore() {
            this.tasks = [];
            this.cnt = 1;
        },

        listDbStore() {
            return this.tasks;
        },

        editDbStore(item) {
            //task에서 item과 같은 것을 찾아서 인덱스로 변환
            const idx = this.tasks.findIndex(task => task == item);
            item.done = 'N';

            //splice로 수정된 아이템 저장
            this.tasks.splice(idx, 1, item);
        }
    }
})