<script setup lang="ts">
  import Header from './components/Header.vue'
</script>

<template>
  <view class="dou-flex dou-flex-col dou-h-full">
    <Header />
    <scroll-view
      enable-back-to-top
      scroll-y
      refresher-enabled
      class="dou-flex-1 dou-overflow-hidden"
    >
      <uv-button type="success" text="确定"></uv-button>
      <uv-text type="primary" text="主色"></uv-text>

      <uni-card v-for="item in 100" :key="item">
        <text class="uv-line-1">
          这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
        </text>
      </uni-card>
    </scroll-view>
  </view>
</template>

<style lang="scss"></style>
