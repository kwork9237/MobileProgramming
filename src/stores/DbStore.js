import { defineStore } from "pinia";
import todoApi from "src/apis/todoApi";

export default defineStore("useDbStore", {
    state:() => ({
        tasks:[],
        status : false,
        cnt : 0,
    }),
    
    getters : {
    },

    actions : {
        //create > O
        async insertDbStore(taskName) {
            console.log("insertDbStore", taskName);

            const payload = { title : taskName };
            const res = await todoApi.create(payload);

            if(res.status == 200) {
                if(res.data.id) {
                    this.tasks.unshift({
                        id : res.data.id,
                        title : taskName,
                        done : "N"
                    });

                    this.cnt++;
                }
                
                this.listDbStore();
                return true;
            }

            else
                return false;
        },

        //read > O
        async listDbStore() {
            console.log("listDbStore");
                
            const len = 5;
            let lastId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    
            if(this.tasks.length > 0 && this.tasks.length == this.cnt) {
                return false;
            }
    
            const payload = { lastId, len };
            const res = await todoApi.list(payload);

            if(res.data.list) {
                this.tasks = [...this.tasks, ...res.data.list];
                console.log(this.tasks);
                this.cnt = res.data.cnt;
            }
        },
        
        //update
        async editDbStore(item) {
            console.log("editDbStore");

            const idx = this.tasks.findIndex(task => task == item);
            item.done = 'N';
            this.tasks.splice(idx, 1, item);

            if(item.title != this.tasks.title) {
                const res = await todoApi.update(item);
                if(res.status == 200)
                    return true;
                else
                    return false;
            }
        },

        //delete > O
        async removeDbStore(item) {
            console.log("removeDbStore");

            const idx = this.tasks.findIndex(task => task.id == item.id);
            this.tasks.splice(idx, 1);

            const res = await todoApi.remove(item);

            if(res.status == 200) return true;
            else return false;
        },
        
        //reset > O
        async resetDbStore() {
            console.log("resetDbStore");

            const payload = {
                title : "todo_",
                done : "N",
                len : 100,
            };

            const res = await todoApi.reset(payload);
            if(res.status == 200) {
                this.listDbStore();
                return true;
            }

            else
                return false;
        },
    }
})