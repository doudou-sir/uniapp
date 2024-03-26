<template>
  <view class="content">
    <image class="logo" src="/static/images/appLogo.svg" />
    <view class="text-area">
      <text class="title">{{ title + counter.count }}</text>
      <button @click="counter.increment">+</button>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores'
  const counter = useCounterStore()
  const title = ref('Hello UniApp')
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
