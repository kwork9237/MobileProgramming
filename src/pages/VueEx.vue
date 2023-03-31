<template class="q-pa-md q-getter-md">
    <!-- 템플릿 문법 -->
    <q-card-section>Message: {{ msg }}</q-card-section>
    <q-separator />

    <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
        <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
    <q-separator />

    <q-card-section>
        <q-btn
            unelevated
            color="primary"
            type="a"
            target="_blank"
            v-bind:id="linkId"
            v-bind:href="link.to"
            :title="link.title"
            :label="link.label"
        >
        </q-btn>
    </q-card-section>
    <q-separator/>

    <q-card-section>
        <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
    </q-card-section>
    <q-separator/>

    <q-card-section>
        {{ number + 1 }}
    </q-card-section>
    <q-separator/>

    <q-card-section> {{ ok ? "YES" : "NO" }} </q-card-section>
    <q-separator/>

    <q-card-section>
        {{ message.split("").reverse().join("") }}
    </q-card-section>
    <q-separator/>

    <q-card-section :id="`list-${id}`"> list-{{ id }}</q-card-section>
    <q-separator/>

    <q-card-section class="text-h6">
        {{ calculateDate() }}
    </q-card-section>
    <q-separator/>

    <q-card-section v-if="!seen"> Now you see me </q-card-section>
    <q-card-section v-else> on no! </q-card-section>
    <q-separator/>

    <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
    <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
    <q-card-section v-else> on no! </q-card-section>
    <q-separator/>

    <q-card-section v-if="type == 'A'"> A </q-card-section>
    <q-card-section v-else-if="type === 'B'"> B </q-card-section>
    <q-card-section v-else-if="type === 'C'"> C </q-card-section>
    <q-card-section v-else> Not A/B/C </q-card-section>

    <a v-bind:href="url">123</a><br>
    <a :href="url">123</a><br>

    <a v-on:click="doSomething">aaa</a><br>
    <a @click="doSomething">aaa</a><br>

    <a v-bind:[attributeName]="url">bbb</a><br>
    <a :[attributeName]="url">bbb</a><br>

    <a v-on:[eventName]="doSomething">ccc</a><br>
    <a @[eventName]="doSomething">ccc</a><br>

    <!--<a :['foo' + bar]="value"></a>-->
    <a :[someAttr]="value"></a><br>

    <!-- 반응형 기초 -->
    <div class="q-pa-md row items-start">
        <q-btn @click="increment1" label="카운트" color="primary"></q-btn>
        <q-card-section>methodCount is : {{ methodCount }}</q-card-section>
    </div>
    <q-separator/>

    <div class="q-pa-md row items-start">
        <q-btn @click="mutateDeeply" label="mutateDeeply" color="primary"></q-btn>
        <q-card-section>obj is : {{ obj }}</q-card-section>
    </div>
    <q-separator/>

    <q-card-section>
        <q-input v-model="inputData"
            outlined
            bottom-slots
            label="DebounceEx"
            counter
            :dense="true"
        />
    </q-card-section>
    <q-separator/>

    <!-- 계산된 속성 -->
    <q-card-section>
        책을 가지고 있다 : {{ publishedBooksMessage }}
    </q-card-section>
    <q-separator/>

    <q-card-section>
        책을 가지고 있다 : {{ calculateBooksMessage }}
    </q-card-section>
    <q-separator/>

    <q-card-section class="text-h6">
        {{ toTitledate }}
        {{ calculateDate() }}
    </q-card-section>
    <q-separator/>

    <q-card-section class="text-h6">
        {{ fullName }}
    </q-card-section>
    <q-separator/>

    <!-- 클래스와 스타일 바인딩 -->

    <!-- 작동 안함 -->
    <q-card-section class="{active:isActive, 'text-h3': hasError}">change color 1</q-card-section>

    <!-- 작동함 -->
    <q-card-section class="static" :class="{active:isActive, 'text-h3': hasError}">change color 2</q-card-section>

    <q-card-section :class="classObject">change color 3</q-card-section>

    <q-card-section :class="classObj">change color 4</q-card-section>

    <!-- 조건부 렌더링 -->

    <!-- 리스트 렌더링 -->
    
    <!-- 이벤트 핸들링 -->
    
    <!-- Form 입력 바인딩 -->
    
    <!-- 생명주기 훅 -->
    
    <!-- 감시자 -->
    
    <!-- 템플릿 참조 -->

    <!-- 컴포넌트 기초 -->
</template>

<script>
//timestamp의 date가 없으므로 실행이 안됐었음 (import 필요)
//템플릿 문법
import { date } from 'quasar'

//반응형 기초
import { nextTick } from 'vue'
import { debounce } from 'lodash' //lodash-es 시 오류

export default {
    name:'VueEx',
    title:'Vue Basic',
    components:{},
    data() {
        return {
            //템플릿 문법
            msg: "hello Vue",
            rawHtml: `<span style="color: red">빨간색이여야 합니다.</span>`,

            linkId: "vue",
            link: {
                to: "http://vuejs.org",
                title: "뷰 공식 사이트",
                label: "Vuejs.org"
            },

            isButtonDisabled: true,

            ok: true,
            number: 1000,
            message: "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
            id: "genie",

            seen:true,
            awesome:true,
            type: "B",

            //반응형 기초
            methodCount: 1,

            obj: {
                nested: { count: 0 },
                arr: ['foo', 'bar']
            },

            inputData:'',

            //계산된 속성
            author: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            },

            str:'',

            firstName: 'John',
            lastName: 'Doe',

            //클래스와 스타일 바인딩
            isActive : true,
            hasError : true,

            classObject: {
                active: false,
                'text-h3': false
            },

            isActive2: true,
            error: null,

            
            //조건부 렌더링
            //리스트 렌더링
            //이벤트 핸들링
            //Form 입력 바인딩
            //생명주기 훅
            //감시자
            //템플릿 참조
            //컴포넌트 기초
        }
    },
    computed: {
        //계산된 속성
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No'
        },

        toTitledate() {
            const timeStamp = Date.now();
            const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
            return formattedString;
        },

        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },

            set(newValue) {
                [this.firstName, this.lastName] = newValue.split(' ')
            }
        },

        //클래스와 스타일 바인딩
        classObj() {
            return {
                active: this.isActive2 && !this.error,
                'text-h3': this.error && this.error.type === 'fatal'
            }
        },

        //조건부 렌더링
        //리스트 렌더링
        //이벤트 핸들링
        //Form 입력 바인딩
        //생명주기 훅
        //감시자
        //템플릿 참조
        //컴포넌트 기초
    },
    watch: {
        //반응형 기초
        inputData: debounce(
            function(newVal, oldVal) {
                console.log(newVal, oldVal)
            }, 500
        )
    },
    mounted() {
        //반응형 기초
        console.log(this.methodCount)

        this.methodCount = 2
        console.log(this.methodCount)

        this.increment1()
        console.log(this.methodCount)

        this.increment2()
        console.log(this.methodCount)

        //클래스와 스타일 바인딩
        this.error = {};
        this.error.type = 'fatal';

        //조건부 렌더링
        //리스트 렌더링
        //이벤트 핸들링
        //Form 입력 바인딩
        //생명주기 훅
        //감시자
        //템플릿 참조
        //컴포넌트 기초
    },
    created() {
        //반응형 기초
        this.debouncedClick = _.debounce(this.click, 500)
        console.log("created")
    },
    unmounted() {
        //반응형 기초
        this.debouncedClick.cancel()
        console.log("unmounted")
    },
    methods: {
        //템플릿 문법
        calculateDate() {
            const timeStamp = Date.now();
            const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:MM");
            return formattedString;
        },

        //반응형 기초 - 메서드 선언
        increment1() {
            this.methodCount++
        },

        //반응형 기초 - DOM 업데이트 타이밍
        increment2() {
            this.methodCount++
            nextTick(() => {
                //업데이트된 DOM에 접근 가능
                //빨간 부분은 상관없다
            })
        },

        mutateDeeply() {
            this.obj.nested.count++
            this.obj.arr.push('baz')
        },

        /*
        click: debounce(
            function() {

            }, 500
        )
        */
        click() {
            console.log("created")
        },

        calculateBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No`'
        },

        calculateDate() {
            setInterval(() => {
                    const timeStamp = Date.now();
                    const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
                    return formattedString;
                }, 1000
            );

            return this.str;
        },

        //클래스와 스타일 바인딩
        //조건부 렌더링
        //리스트 렌더링
        //이벤트 핸들링
        //Form 입력 바인딩
        //생명주기 훅
        //감시자
        //템플릿 참조
        //컴포넌트 기초
    }
}
</script>

<style scoped>
    /* 클래스와 스타일 바인딩 */
    .active {
        color:red;
    }

    /* */
</style>