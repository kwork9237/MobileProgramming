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

    <!-- 템플릿 문법 - 인자 부분 하기 -->

    <!-- 템플릿 문법 - 인자 부분 하기 -->

    <!-- 반응형 기초 -->
    <div class="q-pa-md row items-start">
        <q-btn @click="increment1" label="카운트" color="primary"></q-btn>
        <q-card-section>methodCount is : {{ methodCount }}</q-card-section>
    </div>
    <q-separator/>
</template>

<script>
//timestamp의 date가 없으므로 실행이 안됐었음 (import 필요)
//템플릿 문법
import { date } from 'quasar'

//반응형 기초
import { nextTick } from 'vue'

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
        }
    },
    computed: {

    },
    watch: {

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
    }
}
</script>

<style>

</style>