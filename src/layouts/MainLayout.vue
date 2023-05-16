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
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn to="/" label="Quasar App" class="text-subtitle1" unelevated></q-btn>
        </q-toolbar-title>

        <q-btn to="/signin" flat text-color="white" label="회원가입"></q-btn>
        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

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

const linksList = [
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
]
/*
const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
*/
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
