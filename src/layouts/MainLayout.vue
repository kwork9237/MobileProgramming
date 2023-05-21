<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-btn
            to="/"
            label="Vue Study"
            class="text-subtitle1"
            unelevated
          ></q-btn>
        </q-toolbar-title>
        <q-space />
        <div v-if="!member">
          <q-btn to="/signin" flat text-color="white" label="회원가입"></q-btn>
          <q-btn to="/login" flat text-color="white" label="로그인"></q-btn>
        </div>
        <div v-else>
          <q-btn flat>
            <q-avatar
              size="35px"
              color="grey"
              text-color="white"
              class="q-mr-sm"
            >
              <img v-if="hasImage" :src="member.mb_photo" @error="imageError" />
              <span class="my-avatar">{{ member.mb_id[0] }} </span>
            </q-avatar>
            <span> {{ member.mb_id }} 님</span>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section @click="logout">로그아웃</q-item-section>
                </q-item>

              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useUserStore } from "src/stores/user";
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data() {
    return {
      leftDrawerOpen : false,
      hasImage : true,
      essentialLinks : [
        {
          title: "Vue 기초 문법",
          caption: "Vue 핵심 가이드",
          icon: "school",
          link: "/vue"
        },
        {
          title : 'Shopping List',
          caption : 'Vue 실습 1',
          icon : 'code',
          link : '/shop'
        },
        {
          title : '6week study',
          caption : '6주차 실습',
          icon : 'code',
          link : './study/6week'
        },
        {
          title : '7week Todo',
          caption : '7주차 실습 (ToDo)',
          icon : 'code',
          link : './study/7week'
        },
        {
          title : '9week Todo',
          caption : '9주차 실습 (ToDo DB)',
          icon : 'chat',
          link : './study/dbtodo'
        },
        {
          title : '9week Assignment',
          caption : '9주차 과제 (Store)',
          icon : 'chat',
          link : './study/dbstore'
        },
        {
          title : '11week Todo',
          caption : '11주차 실습 (Login)',
          icon : 'code',
          link : './study/login'
        },

        //test
        {
          title : 'TEST1',
          caption : 'TEST1',
          icon : 'code',
          link : './study/loginstore'
        },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, {
      member: "member",
    }),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),

    async imageError() {
      this.hasImage = false;
    },
  },
})
</script>
<style scoped lange="scss">
.my-avater {
  text-transform : uppercase;  
}
</style>