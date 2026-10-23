<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import { Layout } from 'vuepress-theme-hope/client'
import ArticleList from '../components/ArticleList.vue'

const articles = useBlogType('article')
</script>

<template>
  <Layout>
    <main class="page">
      <ArticleList :items="articles.items" />
    </main>
  </Layout>
</template>
