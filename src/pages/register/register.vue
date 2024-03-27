<script setup lang="ts">
  // 注册表单数据
  const regFormData = ref({
    username: '',
    email: '',
    password: ''
  })

  // 表单校验规则
  const regFormRules = ref({
    username: {
      rules: [
        {
          required: true,
          errorMessage: '用户名不能为空',
          trigger: ['blur', 'change']
        }
      ]
    },
    email: {
      rules: [
        {
          required: true,
          errorMessage: '邮箱不能为空',
          trigger: ['blur', 'change']
        },
        {
          pattern: '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$',
          errorMessage: '邮箱格式不正确',
          trigger: ['blur', 'change']
        }
      ]
    },
    password: {
      rules: [
        {
          required: true,
          errorMessage: '密码不能为空',
          trigger: ['blur', 'change']
        },
        {
          pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$',
          errorMessage: '密码必须包含大小写字母、数字',
          trigger: ['blur', 'change']
        },
        {
          minLength: 6,
          maxLength: 20,
          errorMessage: '密码长度必须在 {minLength} 到 {maxLength} 个字符',
          trigger: ['blur', 'change']
        }
      ]
    }
  })

  // 表单引用
  const regForm = ref()

  // 表单校验
  const validateForm = () => {
    regForm.value
      .validate()
      .then(() => {
        // 校验通过，执行注册逻辑
        console.log('校验通过')
      })
      .catch(() => {
        // 校验失败，执行错误处理逻辑
        console.log('校验失败')
      })
  }

  // 注册按钮点击事件
  const isRegister = async () => {
    if (!regForm.value) return
    validateForm()
  }
</script>

<template>
  <view class="flex flex-col justify-center items-center w-full h-full">
    <view class="w-600 m-t-50% m-b-50%">
      <view class="register-form">
        <uni-forms ref="regForm" :rules="regFormRules" :modelValue="regFormData">
          <uni-forms-item name="username">
            <uni-easyinput v-model="regFormData.username" placeholder="用户名" />
          </uni-forms-item>
          <uni-forms-item name="email">
            <uni-easyinput v-model="regFormData.email" placeholder="邮箱" />
          </uni-forms-item>
          <uni-forms-item name="password">
            <uni-easyinput v-model="regFormData.password" placeholder="密码" />
          </uni-forms-item>
        </uni-forms>
        <button class="dou-btn-primary" @click="isRegister">注册</button>
        <button>登录</button>
      </view>
    </view>
  </view>
</template>

<style lang="scss"></style>
