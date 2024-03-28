<script setup lang="ts">
  // 状态栏高度
  const statusBarHeight = ref<number | string>('var(--status-bar-height)')
  // 右边安全区域
  const rightSafeArea = ref<number | string>(0)
  // 整个导航栏高度
  const navBarHeight = ref<number | string>(0)
  // 设备信息
  const equipmentInfo = () => {
    // 获取窗口信息
    const windowInfo = uni.getWindowInfo()
    console.log('windowInfo', windowInfo)
    statusBarHeight.value = windowInfo.statusBarHeight

    // 获取胶囊信息
    const MenuButton = uni.getMenuButtonBoundingClientRect()
    console.log('MenuButton', MenuButton)
    const menuTop = MenuButton.top
    const menuHeight = MenuButton.height
    const menuLeft = MenuButton.left
    // 胶囊顶部 - 状态栏
    const menuTopSubStatusBar = menuTop - windowInfo.statusBarHeight
    // 整个导航栏高度
    navBarHeight.value = menuTopSubStatusBar * 2 + menuHeight + windowInfo.statusBarHeight
    // 右边安全区域
    rightSafeArea.value = windowInfo.screenWidth - menuLeft
  }
  onMounted(() => {
    equipmentInfo()
  })
</script>

<template>
  <view class="navbar-wrapper">
    <slot />
  </view>
</template>

<style scoped lang="scss">
  .navbar-wrapper {
    height: v-bind(navBarHeight + 'px');
    width: v-bind(rightSafeArea + 'px');
    box-sizing: border-box;
    background-color: deeppink;
  }
</style>
