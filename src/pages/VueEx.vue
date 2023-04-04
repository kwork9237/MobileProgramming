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

    <q-card-section :class="[activeClass, errorClass]">change color 5</q-card-section>

    <q-card-section :class="[isActive ? activeClass : '', errorClass]">change color 6</q-card-section>

    <q-card-section :class="[{active:isActive}, errorClass]">change color 7</q-card-section>
    <q-separator/>

    <!-- 클래스&스타일 바인딩 / 컴포넌트 추가시 -->
    <q-card-section :class="{foo:true, bar:true}">안녕! 1</q-card-section>

    <class-child></class-child>
    <class-child :class="[baz, boo]"></class-child>
    <class-child :class="{ active : isActive }"></class-child>

    <q-card-section :class="{foo : true, bar : true}" :id="$attrs.id">안녕! 2</q-card-section>
    <class-child id="hi">hi</class-child>

    <q-card-section :style="styleObject">change color1</q-card-section>
    <q-card-section :style="[baseStyles, overridingStyles]">change color2</q-card-section>

    <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox']}">aaa</div>
    <q-separator/>

    <!-- 조건부 렌더링 -->
    <q-card-section v-if="awesome2">Vue is Awesome!</q-card-section>

    <q-btn @click="awesome2 = !awesome2" label="toggle"></q-btn>
    <q-card-section v-if="awesome2">Vue is Awesome!</q-card-section>
    <q-card-section v-else>oh no!</q-card-section>
    <q-separator/>

    <q-card-section v-if="type2 == 'A'"> A </q-card-section>
    <q-card-section v-else-if="type2 === 'B'"> B </q-card-section>
    <q-card-section v-else-if="type2 === 'C'"> C </q-card-section>
    <q-card-section v-else> Not A/B/C </q-card-section>
    <q-separator/>

    <div class="q-pa-md row items-start q-gutter-md">
        <q-card v-if="ok2"
            dark
            bordered
            class="bg-grey-9 my-card">
            <q-card-section>
                <div class="text-h6">our changing planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-separator dark inset/>
            <q-card-section>
                Lorem ipsum dolor sit amet, consetetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
        </q-card>
    </div>
    <q-separator/>

    <div class="q-pa-md row items-start q-gutter-md">
        <q-card
            v-show="ok2"
            dark
            bordered
            class="my-card text-white"
            style="background: radial-gradient(circle, #35A2FF 0%, #014A88 100%)"
        >
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-separator dark inset/>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
        </q-card>
    </div>
    <q-separator/>

    <!-- 리스트 렌더링 -->
    <div class="q-pa-md">
        <q-list v-for="(item, idx) in listItems" :key="idx" bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>
                    {{ idx + 1 }}. {{ item.message }}
                </q-item-section>
            </q-item>
        </q-list>
    </div>
    <q-separator/>

    <div class="q-pa-md">
        <q-list v-for="(item, index) in listItems2" :key="index" bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>
                    {{ parentMessage }} - {{ index + 1 }} - {{ item.message }}
                </q-item-section>
            </q-item>
        </q-list>
    </div>

    <div class="q-pa-md">
        <q-list v-for="({message}, index) in listItems2" :key="index" bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>
                    {{ message }} - {{ index + 1 }}
                </q-item-section>
            </q-item>
        </q-list>
    </div>

    <div class="q-pa-md">
        <q-list v-for="(item, index) in tupleListItems" :key="index" bordered separator>
            <q-item clickable v-ripple>
                <q-item-section v-for="(childItem, index) in item.children" :key="index">
                    <q-item-section>
                        {{ item.message }} - {{ childItem }}
                    </q-item-section>
                </q-item-section>
            </q-item>
        </q-list>
    </div>

    <div class="q-pa-md">
        <q-list v-for="({message}, index) of listItems2" :key="index" bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>
                    {{ message }} - {{ index }}
                </q-item-section>
            </q-item>
        </q-list>
    </div>
    <q-separator/>

    <div class="q-pa-md">
        <q-list
            v-for="(value, key, idx) in myObject"
            :key="idx"
            bordered
            separator
        >
        <!--
            v-for="(value, key) in myObject"
            v-for="(value, key, idx) in myObject"
        -->
            <q-item clickable v-ripple>
                <q-item-section>
                    {{ idx + 1 }}. {{ key }} : {{ value }}
                </q-item-section>
            </q-item>
        </q-list>
    </div>

    <!-- 1부터 시작된다. -->
    <div class="q-pa-md row items=start">
        <q-list v-for="n in 10" :key="n" bordered separator>
            <q-item-section>
                {{ n }}
            </q-item-section>
        </q-list>
    </div>

    <!-- 작동 안함 -->
    <div class="q-pa-md items-start">
        <my-component
            v-for="(item, index) in listItems"
            :key="index"
            :item="item"
            :index="index"
        >
        </my-component>
    </div>

    <q-card-section>
        {{ filterItems }}
    </q-card-section>

    <q-list v-for="n in evenNumbers" :key="n" bordered separator>
        <q-item clickable v-ripple>
            <q-item-section>
                {{ n }}
            </q-item-section>
        </q-item>
    </q-list>
    <q-separator/>

    <q-list v-for="(numbers, index) in sets" :key="index" bordered separator>
        <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
            <q-item-section>
                <q-item-label class="text-h6 text-weight-bolder text-center">
                    {{ n }}
                </q-item-label>
            </q-item-section>
        </q-item>
    </q-list>

    <q-card-section>
        {{ reverseNumbers }}
    </q-card-section>
    <q-separator/>

    <!-- 이벤트 핸들링 -->
    <q-btn @click="count++" label="counts" color="primary"></q-btn>
    <q-card-section>
        Count is : {{ count }}
    </q-card-section>

    <div class="q-pa-md row items-start">
        <q-btn
            @click="greet"
            label="greet"
            color="secondary"
            class="q-ma-sm"
        ></q-btn>

        <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm"/>
        <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm"/>
        <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm"/>
    </div>

    <div class="q-pa-md row items-start">
        <q-btn
            @click="say('안녕')"
            label="안녕이라고 말하기"
            color="secondary"
            class="q-ma-sm"
        ></q-btn>

        <q-btn
            @click="say('잘가')"
            label="잘가라고 말하기"
            color="secondary"
            class="q-ma-sm"
        ></q-btn>
    </div>

    <div class="q-pa-md row items-start">
        <q-btn
            @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
            label="아직 양식을 제출할 수 없습니다1"
            color="secondary"
            class="q-ma-sm"
        ></q-btn>

        <q-btn
            @click="(event) => warn('아직 양식을 제출할 수 없습니다!!!', event)"
            label="아직 양식을 제출할 수 없습니다2"
            color="secondary"
            class="q-ma-sm"
        ></q-btn>
    </div>
    <q-separator/>

    <div class="q-pa-md row items-start">
        <!-- 클릭 이벤트 전파 중지 -->
        <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm"/>

        <!-- submit 이벤트 페이지 리로드 안함 -->
        <q-form
            label="prevent"
            color="primary"
            @submit.prevent="doThis"
            class="q-ma-sm"
        >
            <q-input v-model="name"/>
            <q-btn label="submit" type="submit"></q-btn>
        </q-form>

        <!-- 수식어 연결 불가 -->
        <q-btn
            label="stopPrevent"
            color="primary"
            @click.stop.prevent="doThis()"
            class="q-ma-sm"
        ></q-btn>

        <!-- 수식어만 사용 가능 -->
        <q-form
            label="prevent"
            color="primary"
            @submit.prevent
            class="q-ma-sm"
        >
            <q-input v-model="name"/>
            <q-btn label="submit" type="submit"></q-btn>
        </q-form>

        <!-- event.target가 본인일 경우에만 수행 -->
        <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm"/>
    </div>
    <q-separator/>
    
    <!-- Form 입력 바인딩 -->
    <q-card-section class="col-4">
        <q-input
            outlined
            bottom-slots
            v-model.lazy="text"
            label="Label"
            counter
            :dense="true"
        >
            <template v-slot:prepend>
                <q-icon name="place"/>
            </template>
            <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer"/>
            </template>
            <template v-slot:hint>
                Field hint
            </template>
        </q-input>
    </q-card-section>

    <input v-model="text">
    <q-separator/><br>

    메시지 입력하기 : {{ text }}
    <q-input
        outlined
        bottom-slots
        v-model.lazy="text"
        label="Label"
        counter
        :dense="true"
    >
        <template v-slot:prepend>
            <q-icon name="place"/>
        </template>        
        <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer"/>
        </template>
        <template v-slot:hint>
                Field hint
            </template>
    </q-input>
    <q-separator/>

    <span>여러 줄 메세지 : </span>
    <p style="white-space : pre-line;"> {{ textArea }} </p>
    <div class="q-pa-md" style="max-width: 300px">
        <q-input
            v-model="textArea"
            filled
            type="textarea"
        />
    </div>
    <q-separator/>

    <q-card-section class="col-4 q-mt-md">
        <q-option-group
            v-model="group"
            :options="opts"
            color="green"
            type="checkbox"
        />
        {{ group }}
    </q-card-section>
    <q-separator/>

    <q-card-section class="col-4 q-mt-md">
        <q-radio v-model="color" val="teal" label="Teal" color="teal"/>
        <q-radio v-model="color" val="orange" label="Orange" color="orange"/>
        <q-radio v-model="color" val="red" label="Res" color="red"/>
        <q-card-section>
            {{ color }}
        </q-card-section>
    </q-card-section>
    <q-separator/>

    <q-card-section class="col-4">
        <q-select
            filled
            bottom-slots
            v-model="model"
            :options="options2"
            label="Label"
            counter
            dense
            :options-dense="false"
        >
            <template v-slot:prepend>
                <q-icon name="place" @click.stop.prevent/>
            </template>
            <template v-slot:append>
                <q-icon
                    name="close"
                    @click.stop.prevent="model = ''"
                    class="cursor-pointer"
                />
            </template>
            <template v-slot:hint>Field hint</template>
        </q-select>
    </q-card-section>
    <q-separator/>

    <q-card-section class="col-4">
        <q-select
            filled
            v-model="model2"
            multiple
            :options="options"
            counter
            max-values="2"
            hint="Max2 selections"
            style="width:250px"
        >
        </q-select>
    </q-card-section>
    <q-separator/>

    <input type="radio" v-model="picked" value="가"/>
    <input type="checkbox" v-model="toggle"/>

    <select v-model="selected">
        <option value="kor">kor</option>
    </select>
    <q-separator/>

    <q-card-section class="col-4 q-mt-md">
        <q-toggle v-model="value" color="green" label="on right"
            true-value="yes"
            false-value="no"
        /> {{ value }}
    </q-card-section>
    <q-separator/>
    
    <q-card-section class="col-4 q-mt-md">
        <q-toggle v-model="value2" color="green" label="on right"
            :true-value="dynamicTrueValue"
            :false-value="dynamicFalseValue"
        /> {{ value2 }}
    </q-card-section>
    <q-separator/>

    <q-card-section class="col-4 q-mt-md">
        <q-radio v-model="color1" :val="first" label="Teal" color="teal"/>
        <q-radio v-model="color1" :val="second" label="Orange" color="orange"/>
        <q-card-section>
            {{ color1 }}
        </q-card-section>
    </q-card-section>
    <q-separator/>
    
    <select v-model="selected">
        <option :value="{ number : 123 }">123</option>
    </select>
    <q-separator/>

    <input v-model.lazy="msg"/>
    <q-separator/>
    <input v-model.number="age"/>
    <q-separator/>
    <input v-model.trim="msg"/>
    <q-separator/>

    <!-- 생명주기 훅 => 없음 -->
    <!-- 감시자 -->
    <p>
        Y or NO [질문] : <input v-model="question"/>
    </p>
    <p>{{ answer }}</p>

    <!-- 
        깊은 감시자, 
        열성적 감시자,
        콜백 실행 타이밍,
        this.$watch()
        
        [질문]
    -->
    <q-separator/>
    
    <!-- 템플릿 참조 -->
    <input ref="input">
    <ul>
        <!-- 밑에 빨간줄 상관없음 -->
        <li v-for="(item, index) in list" ref="items" :key="index">
            {{ item }} - {{ index }}
        </li>
    </ul>

    <input :ref="(el) => {
        //속성이나 ref에 el 할당
    }">
    <q-separator/>

    <!-- 컴포넌트에 ref 사용 [질문]-->
    <a>컴포넌트에 ref</a>
    <Child ref="child"/>

    <!-- 컴포넌트 기초 -->
    <h5>아래에 자식 컴포넌트가 있다.</h5>
    <ButtonCounter/>

    <q-separator/>
    <h5>아래에 많은 자식 컴포넌트가 있다.</h5>
    <ButtonCounter/>
    <ButtonCounter/>
    <ButtonCounter/>
    <!-- DOM이 뭔지 [질문] -->

    <q-separator/>
    <!-- BlogPost vue -->
    <BlogPost title="Vue와 함께한 나의 여행"></BlogPost>
    <BlogPost title="Vue로 블로깅하기" />
    <BlogPost title="Vue가 재미있는 이유" />

    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            @enlarge-text="postFontSize += 0.1"
        />
    </div>
    <q-separator/>
    <br>

    <!--AlertBox-->
    <AlertBox>
        Something bad...
    </AlertBox>
    <q-separator/>
    <br>

    <!-- Tab interface-->
    <TabInterface/> <!-- 셀프 태그 닫기-->
    <q-separator/>
    <br>

    <!-- 
        DOM Templet parsing warn [질문] 
        파싱 구현을 어떻게 하는지,

        <BlogPost/>
        <span>hello</span>

        를 해도 일반적인 blogpost가 작동된다.
    -->
    
</template>

<script>
//timestamp의 date가 없으므로 실행이 안됐었음 (import 필요)
//템플릿 문법
import { date } from 'quasar'

//반응형 기초
import { nextTick } from 'vue'
import { debounce } from 'lodash' //lodash-es 시 오류

//클래스와 스타일 바인딩
import ClassChild from "components/ClassChild.vue"

//템플릿 참조
import Child from "components/Child.vue"

//컴포넌트 기초
import ButtonCounter from 'components/ButtonCounter.vue'
import BlogPost from 'components/BlogPost.vue'
import AlertBox from 'components/AlertBox.vue'
import TabInterface from 'components/TabInterface.vue'

//DOM 템플릿 파싱 주의 사항 테스트 (작동 안됨 - [질문])
import Test from 'components/Test.vue'

export default {
    name:'VueEx',
    title:'Vue Basic',
    components:{
        //클래스와 스타일 바인딩
        ClassChild,

        //템플릿 참조
        Child,

        //컴포넌트 기초
        ButtonCounter,
        BlogPost,
        AlertBox,
        TabInterface,
        Test,
    },
    data() {
        //기존 반환
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

            activeClass: 'active',
            errorClass: 'text-danger',

            styleObject: {
                color: 'red',
                fontSize: '13px'
            },

            baseStyles: {
                textDecorationLine:'underline',
                textDecorationThickness: '5px',
                textDecorationColor: 'red',
            },
            overridingStyles:{
                color:'blue',
                fontSize:'35px',
            },
            
            //조건부 렌더링
            awesome2 : true,
            type2 : "B",
            ok2: true,

            //리스트 렌더링
            listItems: [
                { message: "Foo" },
                { message: "Bar" }
            ],

            parentMessage : 'Parent',
            listItems2 : [
                { message: "Foo" },
                { message: "Bar" }
            ],

            tupleListItems:[
                { message: "Foo", children:["baby"] },
                { message: "Bar", children:["child"] },
            ],

            myObject: {
                title: 'Vue에서 목록을 작성하는 방법',
                author: '홍길동',
                publishedAt: '2016-04-10'
            },

            items: [
                { message : "Foo" },
                { message : "Bar" }
            ],

            numbers: [
                1, 2, 3, 4, 5
            ],

            sets: [
                [ 1, 2, 3, 4, 5 ],
                [ 6, 7, 8, 9, 10 ]
            ],

            //이벤트 핸들링
            count : 0,
            name: "Vue.js",

            //Form 입력 바인딩
            text: "",
            textArea: "",

            group: ["op1"],
            opts: [
                {
                    label: "Option 1",
                    value: "op1",
                },
                {
                    label: "Option 2",
                    value: "op2",
                },
                {
                    label: "Option 3",
                    value: "op3",
                },
            ],

            color:"",

            options2: [
                "Google",
                "Facebook",
                "Twitter",
                "Apple",
                "Oracle"
            ],
            model: null,
            model2:[],

            value:"yes",

            value2:"NO",
            dynamicTrueValue:"YES",
            dynamicFalseValue:"NO",

            color1:"",
            first:"select 1",
            second:"select 2",

            //생명주기 훅 => 없음
            //감시자
            question: '',
            answer: '[질문]에는 일반적으로 물음표가 포함됩니다.',
            count: 0,

            //템플릿 참조
            list: [
                'a',
                'b',
                'c'
            ],

            //컴포넌트 기초
            posts: [
                { id: 1, title: 'Vue와 함께한 나의 여행' },
                { id: 2, title: 'Vue로 블로깅하기' },
                { id: 3, title: 'Vue가 재미있는 이유' }
            ],
            postFontSize: 1
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

        //리스트 렌더링
        filterItems() {
            return (this.items = this.items.filter((item) => 
                item.message.match(/Foo/)
            ));
        },

        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0)
        },

        reverseNumbers() {
            const numbers = this.numbers;
            return [...numbers].reverse();
        },
    },
    watch: {
        //반응형 기초
        inputData: debounce(
            function(newVal, oldVal) {
                console.log(newVal, oldVal)
            }, 500
        ),
        //감시자
        question(newQuestion, oldQuestion) {
            if(newQuestion.includes('?'))
                this.getAnswer()
        },
        'some.nasted.key'(newValue) {
            //null
        },

        //감시자 - 깊은 감시자
        someObject: {
            handler(newValue, oldValue) {
                //some obj가 교체되지 않는 이상 newval, oldval은 같다
            },
            deep: true
        },
        //감시자 - 열성적 감시자
        question2: {
            handler(newQuestion) {

            },
            immediate: true
        },
        //감시자 - 콜백 실행
        /*
        key: {
            handler() {},
            flush: 'post'
        },
        */
        count: {
            handler(val, preVal) {
                console.log('is changed!', val, preval)
            },
            flush: 'sync'
        }
    },
    unwatch() {
        //감시자 중지일때
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

        //리스트 렌더링
        console.log("list render");
        this.l_func();
        
        //생명주기 훅
        console.log("component mounted!!@#$");

        //템플릿 참조
        this.$refs.input.focus();
        console.log(this.$refs.items);
    },
    created() {
        //반응형 기초
        this.debouncedClick = _.debounce(this.click, 500);
        console.log("created");

        //감시자 - 선언적 생성?
        /*
        this.$watch('question', (newQuestion) = {
        })
        */
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

        //리스트 렌더링
        l_func() {
            const parentMessage = 'Parent';
            const listItems = [
                "a1",
                "a2"
            ];

            listItems.forEach((item, index) => {
                console.log(parentMessage, item.message, index)
            });
        },

        even(numbers) {
            return numbers.filter(number => number % 2 === 0)
        },
        
        //이벤트 핸들링
        greet(e) {
            this.$q.notify({
                message : `hello ${this.name}!`,
                caption : "5 Minutes ago",
                color: "secondary",
            });
        },

        say(message) {
            alert(message)
        },

        warn(message, event) {
            if (event) {
                event.preventDefault();
                this.$q
                .dialog({
                    title: "Alert",
                    message: `${message}`,
                })
                .onOk(() => {
                    console.log('OK');
                })
                .onCancel(() => {
                    console.log('Cancel');
                })
                .onDismiss(() => {
                    console.log('Dismiss');
                });
            }
        },

        doThis(event) {
            console.log(event)
            this.$q.notify({
                color:"green-5",
                textColor:"white",
                icon:"warning",
                message:`doThis pointerType`,
            });
            console.log("doThis pointerType", event);
        },
        doThat(event) {
            this.$q.notify({
                color: "yellow-5",
                textColor: "white",
                icon: "warning",
                message: `doThat pointerType`
            });
            console.log("doThat event", event);
        },

        //감시자
        async getAnswer() {
            this.answer = '생각 중...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json().answer === 'yes' ? 'y' : 'n')
            }
            catch(err) {
                this.answer = "오류, API 연걸 불가" + err
            }
        },

        w_increment() {
            this.count++
            //callback 1
            this.count++
            //callback 2
            this.count++
            //callback 3
        },
    }
}
</script>

<style scoped>
    /* 클래스와 스타일 바인딩 */
    .active {
        color:red;
    }

    .foo {
        background-color: red;
        color:white;
    }

    .bar {
        color:white;
    }

    #hi {
        font-size:3em;
        color:darkorchid;
    }

    /* 조건부 렌더링 */
    .my-card {
        width:100%;
        max-width: 250px;
    }
</style>