<script setup lang="ts">
  // 边框变化
  const isEmailHover = ref(true)
  const isPwdHover = ref(true)
  const whenEmailFocus = () => {
    isEmailHover.value = !isEmailHover.value
  }
  const whenPwdFocus = () => {
    isPwdHover.value = !isPwdHover.value
  }

  // 输入框
  const email = ref('')
  const password = ref('')
  const isLogin = () => {
    console.log(email.value, password.value)
  }

  // 忘记密码
  const forgetPassword = () => {
    // 跳转到register
    uni.navigateTo({
      url: '/pages/register/register'
    })
  }
  const isRegister = () => {
    // 跳转到register
    uni.navigateTo({
      url: '/pages/register/register'
    })
  }
</script>

<template>
  <view class="login">
    <view class="login_input flex items-center" :class="[!isEmailHover ? 'input-hover' : '']">
      <text class="dou-email dou-icon align-10%" />
      <input
        class="text-32"
        type="text"
        placeholder-style="color: #626262"
        placeholder="邮箱"
        v-model="email"
        @focus="whenEmailFocus"
        @blur="whenEmailFocus" />
    </view>
    <view class="login_input flex items-center" :class="[!isPwdHover ? 'input-hover' : '']">
      <text class="dou-password dou-icon align-10%" />
      <input
        class="text-32"
        password
        type="text"
        placeholder-style="color: #626262"
        placeholder="密码"
        v-model="password"
        @focus="whenPwdFocus"
        @blur="whenPwdFocus" />
    </view>
    <view class="forget_password" @click="forgetPassword">忘记密码？</view>
    <button class="dou-btn-primary login_button" hover-class="button-hover" @click="isLogin">
      登录
    </button>
    <button class="register_button" hover-class="none" @click="isRegister">注册</button>
    <view class="flex justify-center flex-col">
      <text class="text-28 mt-10 text-center font-700" style="color: #167cf8">其他方式</text>
      <view class="flex justify-center p-l-18 p-r-18 mt-4">
        <button hover-class="none" class="other flex justify-center items-center">
          <text class="dou-weixin" style="font-size: large" />
        </button>
        <button hover-class="none" class="other flex justify-center items-center">
          <text class="dou-qq" style="font-size: large" />
        </button>
        <button hover-class="" class="other flex justify-center items-center">
          <text class="dou-phone" style="font-size: large" />
        </button>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50% 10%;
    width: 300px;
    height: 100%;
    &_input {
      width: 300px;
      height: 50px;
      background-color: #f1f7ff;
      border-radius: 10px;
      margin-bottom: 24px;
      .dou-icon {
        font-size: 26px;
        color: $uni-text-color;
        padding: 0 10px;
      }
    }

    &_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      font-weight: bolder;
      font-size: 20px;
      height: 50px;
      border-radius: 10px;
      box-shadow: 0 10px 10px -10px $uni-color-primary;
      margin-bottom: 14px;
    }
    .register_button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
      background-color: #ffffff;
      color: #2f2f2f;
      font-size: 14px;
      font-weight: bold;
    }
    .input-hover {
      border: solid 2px $uni-color-primary;
    }
    .button-hover {
      background-color: #2084fd;
    }
    .forget_password {
      display: flex;
      justify-content: flex-end;
      color: $uni-color-primary;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 14px;
    }
    .other {
      width: 36px;
      height: 36px;
      background-color: #c6c6c6;
      border-radius: 10px;
    }
  }
</style>
