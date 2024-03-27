<script setup lang="ts">
  const props = defineProps({
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#626262'
    }
  })
  // 图标在 iconfont 中的名字
  const iconClassName = computed(() => {
    return `#${props.iconName}`
  })
  // 给图标添加上类名
  const svgClass = computed(() => {
    if (props.className) {
      return `svg-icon ${props.className}`
    }
    return 'svg-icon'
  })
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClassName" :fill="color" />
  </svg>
</template>

<style scoped lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    // position: relative;
    fill: currentColor;
    vertical-align: -0.1em;
  }
</style>
