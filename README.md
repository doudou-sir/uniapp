# uniapp

<div align="center">
    <div>
		<a href="https://github.com/doudou-sir/GutenDOU/tree/main/nestserver" target="blank"><img width="200" src="./public/favicon.svg" /></a><a href="https://uniapp.dcloud.net.cn/" target="blank"><img width="180" src="./public/uniapp.png" /></a>
    </div>
	<h1>UniApp</h1>
</div>

## 1. 创建项目：

```cmd
npx degit dcloudio/uni-preset-vue#vite-ts uniapp
# 第一次
$ y
pnpm i
```

## 2. .editorconfig

```bash
# .editorconfig 文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪
```

## 3. .vscode

~~~json
// setting.json
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    // 使用eslint来fix，包括格式化会自动fix和代码质量检查会给出错误提示
    "source.fixAll.eslint": true
  },
  // 把prettier设置为vscode默认的代码格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // vue文件的默认格式化工具选择prettier
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
    "prettier.bracketSameLine": true, // 但是这一项无法被识别，所以是无效的
    "prettier.vueIndentScriptAndStyle":true,
    "prettier.tabWidth": 4

  // 配置语言的文件关联
  "files.associations": {
    "pages.json": "jsonc",
    "manifest.json": "jsonc",
  },
// #值设置为true时，每次保存的时候自动格式化；值设置为false时，代码格式化请按shift+alt+F
"editor.formatOnSave": true,
    // 使能每一种语言默认格式化规则
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css, scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    /*  prettier的配置 */
    "prettier.printWidth": 120, // 超过最大值换行
    "prettier.tabWidth": 2, // 缩进字节数
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "prettier.semi": true, // 句尾添加分号
    "prettier.singleQuote": true, // 使用单引号代替双引号
    "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
    "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
    "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
    "prettier.htmlWhitespaceSensitivity": "ignore",
    "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
    "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
    "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
    "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
    "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
    "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    "prettier.tslintIntegration": false // 不让prettier使用tslint的代码格式进行校验


{
  "editor.formatOnSave": true,
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[css]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[scss]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[json]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.printWidth": 100,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.singleQuote": true,
  "prettier.bracketSameLine": true,
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.trailingComma": "none",
  "prettier.endOfLine": "auto",
  "prettier.arrowParens": "avoid",
  "prettier.quoteProps": "as-needed",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

~~~



## 4. .prettierrc

~~~bash
pnpm i prettier -D
~~~

```json
{
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "bracketSameLine": true,
  "vueIndentScriptAndStyle": true,
  "trailingComma": "none",
  "endOfLine": "auto",
  "arrowParens": "avoid",
  "quoteProps": "as-needed"
}

printWidth: 100, // 超过最大值换行 
  tabWidth: 2, // 缩进字节数 
  useTabs: false, // 缩进不使用tab，使用空格 
  semi: false, // 句尾添加分号 
  vueIndentScriptAndStyle: true, // 缩进Vue文件中的脚本和样式标签 
  singleQuote: true, // 不适用单引号，适用双引号 
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号 
  bracketSpacing: true, // 格式化结果为 : { foo: bar } 
  trailingComma: 'none', // 无尾逗号 
  arrowParens: 'avoid', // 为单行箭头函数的参数添加圆括号 
  htmlWhitespaceSensitivity: 'strict', // 空格被认为是敏感的 
  endOfLine: 'auto' // 设置统一的行结尾样式 保持现有的行尾 
```

## 5. eslint

~~~bash
pnpm i eslint -D
npx eslint --init
~~~

~~~bash
You can also run this command directly using 'npm init @eslint/config'.
 
? How would you like to use ESLint? ...
To check syntax and find problems
 
? What type of modules does your project use? ...
JavaScript modules (import/export)
 
? Which framework does your project use? ...
Vue.js
 
? Does your project use TypeScript? » No / Yes
Yes
 
? Where does your code run? ... (用空格选中两个，回车确定)
√ Browser
√ Node
 
? What format do you want your config file to be in? ...
JavaScript
 
The config that you've selected requires the following dependencies:
eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now?
No
~~~

~~~bash
# 最后一个提示我们选择No，然后手动npm安装提示的依赖
pnpm i -D eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

# 初始化完成后会在项目根目录下看到一个.eslintrc.js的文件，将后缀改为cjs，这个文件就是eslint的配置文件
~~~

~~~json
// 在package.json,添加命令
 "scripts": {
 	// 执行该命令eslint会检测当前项目下所有的.vue,.js,.ts,.jsx,.tsx文件是否符合eslint的代码规范，并尝试自动修复
    "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
  },
~~~

~~~bash
pnpm lint # 运行
# 报如下错误
  1:1  error  Component name "index" should always be multi-word  vue/multi-word-component-names

✖ 1 problem (1 error, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.
 
 # 按照规则，使用驼峰命名，例如 AppHeader.vue，需要忽略 index.vue
 # 在 .eslintrc.cjs 文件中关闭命名规则
 // 添加规则
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] //需要忽略的组件名
      }
    ],
  }

# 在运行检查命令
pnpm lint # 就不会报之前的错误了
~~~

## 6. 解决ESLint与Prettier的冲突

~~~bash
# 因为ESLint和Prettier都可以进行代码格式化，而且我们在setttings.json文件中同时开启了ESLint和Prettier进行代码格式化，所以两者重叠的格式化规则不一致时就导致了格式化代码时出现冲突的问题
pnpm i eslint-config-prettier eslint-plugin-prettier -D
# eslint-config-prettier 会关闭ESLint中有关代码格式化的配置
# eslint-plugin-prettier 把Prettier配置成ESLint的一个插件，让其当做一个linter规则来运行
~~~

~~~js
// 在 .eslintrc.cjs 中 extends的最后添加一个配置
extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended" // 解决ESlint和Prettier冲突
  ],
~~~

## 7. 配置vite运行的时候自动检测eslint规范

~~~bash
# vite运行的时候默认是不会自动检测eslint规范的，如下图，我们在main.ts文件中声明了变量a，但是没有使用，但是vite可以正常运行却没有给出eslint警告，而执行pnpm lint命令时却可以看到有eslint的警告信息
pnpm i vite-plugin-eslint -D
~~~

~~~ts
// 配置 vite.config.ts文件
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 配置vite在运行的时候自动检测eslint规范
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue']
    })
  ]
})
~~~

## 8. 修改 vite.config.js 文件则不需要重新运行也生效配置

~~~bash
pnpm i vite-plugin-restart -D
~~~

~~~ts
import viteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteRestart({
      restart: ['vite.config.ts']
    })
  ]
})

// 额外配置
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 解析模块路径
  resolve: {
    // 别名
    alias: {
      // 将@解析为当前工作目录下的src文件夹
      '@': path.join(process.cwd(), './src')
    }
  },
  // 服务器配置
  server: {
    // 主机地址
    host: '0.0.0.0',
    // 开启hmr
    hmr: true,
    // 端口号
    port: 7001,
    // 自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        // 目标地址
        target: 'http://localhost:6666',
        // 是否改变源
        changeOrigin: true,
        // 重写路径
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})

~~~

## 9. vite.config.ts 额外配置

~~~bash
# 自动导出引入组件
pnpm i unplugin-auto-import -D
~~~

~~~ts
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    })
  ],
})
~~~

## 10. 创建自定义svg图标

~~~bash
pnpm i vite-plugin-svg-icons -D
# 插件依赖
pnpm install fast-glob -D
# 将SVG文件加载为Vue组件
pnpm i vite-svg-loader -D
~~~

~~~ts
// 创建 src/icons 用于放置svg图标
// vite-plugin-svg-icons 使用
// 在vite.config.ts中配置插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
plugins: [
    createSvgIconsPlugin({
      // 指定 SVG图标 保存的文件夹路径
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定 使用svg图标的格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]

// 入口文件main.ts导入
import 'virtual:svg-icons-register'
// 在icons添加个svg图标
~~~

~~~vue
<!-- 基本使用 pages/index/index.vue -->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <!-- svg:图标外层容器节点,内部需要与use标签结合使用 -->
      <svg style="width: 50rpx; height: 50rpx">
        <!-- 'xlink：href执行用哪一个图标,属性值务必icon-图标名字·' -->
        <!-- use标签fi11属性可以设置图标的颜色 -->
        <use xlink:href="#icon-message" fill="red"></use>
      </svg>
    </view>
  </view>
</template>
~~~

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78b86591f0ea423f92dd31db3303aa8e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=128&h=164&s=2418&e=png&b=ffffff">

~~~vue
<!-- 将其封装成公共组件，创建 src/components，新建 DouIcon.vue -->
<template>
  <svg :class="douClass" :style="{ width: width, height: height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    prefix: {
      type: String,
      default: '#icon-'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    width: {
      type: String,
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    },
    // 添加一个自定义的类名属性
    douClass: {
      type: String,
      default: 'dou-icon'
    }
  })
</script>
<style scoped>
  .dou-icon {
    vertical-align: -0.1em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
    overflow: hidden;
  }
</style>
~~~

~~~ts
// 全局注册方法，两种
// 第一种：
// 在components下新建 index.ts
import DouIcon from './DouIcon.vue'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { DouIcon }
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  }
}

// 在main.ts引入src/index.ts文件,通过app.use方法安装自定义插件，把组件进行全局注册
import { createSSRApp } from 'vue'
import App from '@/App.vue'
import gloablComponents from './components/index'
import 'virtual:svg-icons-register'
export function createApp() {
  const app = createSSRApp(App)
  app.use(gloablComponents)
  return {
    app
  }
}

~~~

~~~vue
<!-- 使用 -->
<dou-icon class="icon" name="message" width="50rpx" height="50rpx" />
<!-- 如果颜色无法修改,可能是svg图标中的fill属性已设置并覆盖颜色 -->
<!-- 图标默认样式 -->
<style scope>
  .svg-icon {
    vertical-align: -0.1em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
    overflow: hidden;
  }
</style>
~~~

~~~json
// 第二种：
// 在 pages.json 下配置
"easycom": {
    "autoscan": true,
    "custom": {
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      // "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
      "^dou-(.*)": "@/components/dou-$1.vue"
    }
  },
~~~

~~~ts
// 在vite.config.ts中配置插件
import svgLoader from 'vite-svg-loader'
plugins: [
    svgLoader()
  ],

// 特别注意,在env.d.ts 中配置这个,不然打包会报错
/// <reference types="vite-svg-loader" />

// 同时在tsconfig.json中也要声明下
{
  "compilerOptions": {
    "types": [
      "@dcloudio/types",
      "vite-plugin-svg-icons/client",
      "vite-svg-loader"
    ]
  }
}
~~~



~~~vue
<!-- 我觉得第二种其实更方便些,就是它用不了@路径 -->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <!-- <dou-icon name="message" /> -->
      <MessComponent />
    </view>
  </view>
</template>

<script setup lang="ts">
  import MessComponent from '../../icons/message.svg?component'
  import { ref } from 'vue'
  const title = ref('Hello')
</script>
~~~

## 11. uniapp类型提示：

~~~bash
# 类型提示
pnpm i -D @types/wechat-miniprogram @uni-helper/uni-app-types
# ts类型提示增强
pnpm i eslint-import-resolver-typescript eslint-plugin-import -D
~~~

~~~json
// tsconfig.json
"compilerOptions": {
    "types": [
      "@dcloudio/types",
      "vite-plugin-svg-icons/client",
      "vite-svg-loader",
      "@types/wechat-miniprogram",
      "@uni-helper/uni-app-types"
    ]
  },
  "vueCompilerOptions": {
    "nativeTags": ["block", "template", "component", "slot"],
  },
~~~

~~~js
// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  // 配置解析vue文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    // 2. 加入 prettier 的 eslint 插件
    'prettier',
    '@typescript-eslint',
    // 3. 加入 import 的 eslint 插件 eslint-import-resolver-typescript
    'import'
  ],
  // 添加规则
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] //需要忽略的组件名
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    'import/no-unresolved': 'off',
    // 对后缀的检测，否则 import 一个ts文件也会报错，需要手动添加'.ts', 增加了下面的配置后就不用了
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'no-console': ['off']
  },
  // eslint-import-resolver-typescript
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  globals: {
    uni: true,
    UniApp: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    UniHelper: true,
    Page: true,
    App: true
  }
}
~~~

~~~json
option =  {
   backgroundColor: '#FFFFFF',
          grid: {
            containLabel: true,
            bottom: '5%',
            top: '20%',
            left: '25%',
            right: '25%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            top: '5%',
            // right: '6%',
            data: ['计划', '总结'],
            itemWidth: 18,
            itemHeight: 18,
            itemGap: 30,
            textStyle: {
              fontSize: 14,
              color: '#333',
              padding: [0, 0, 0, 10],
            },
          },
          xAxis: {
            // name: "班级",
            triggerEvent: true,
            data: ['学业成绩排名','不及格科目', '讲座', '图书借阅', '著作', '专利'],
            axisLabel: {
               show: true,
              fontSize: 10,
              color: '#565656',
              rotate: 20, // 设置旋转角度为30度
              align: 'right', 
              verticalAlign: 'top',
            },
            axisLine: {
              show: false,
              lineStyle: {
                show: false,
                color: '#565656',
                width: 2,
              },
            },

            axisTick: {
              show: false,
            },
          },
          yAxis: [
            {
              // name: '单位:万',
              // type: 'value',
              // nameTextStyle: {
              //   color: '#444444',
              // },
              axisLabel: {
                interval: 0,
                show: true,
                fontSize: 10,
                color: '#565656',
              },
              axisLine: {
                show: false,
                // lineStyle: {
                //   color: "#F3F3F3",
                //   width: 2
                // }
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  // color: '#565656',
                },
              },
            },
          ],
          series: [
            {
              name: '计划',
              type: 'bar',
              silent: true,
              itemStyle: {
                normal: {
                  color: '#30A5C2',
                },
              },
              label: {
                show: true,
                color: '#30A5C2',
                fontSize: 10,
                position: 'top', // 显示位置，可选值有 'top', 'bottom', 'inside', 'outside'
                formatter: '{c}', // 标签内容格式器，这里表示显示数据值
              },
              data: [10, 2, 7, 15, 2, 1],
            },
            {
              name: '总结',
              type: 'bar',
              silent: true,
              itemStyle: {
                normal: {
                  color: '#95D5B8',
                },
              },
              label: {
                show: true,
                color: '#95D5B8',
                fontSize: 10,
                position: 'top', // 显示位置，可选值有 'top', 'bottom', 'inside', 'outside'
                formatter: '{c}', // 标签内容格式器，这里表示显示数据值
              },
              data: [6, 4, 9, 13, 0, 0],
            },
          ],
        }
~~~

# 12. pinia持久化：

~~~bash
pnpm i pinia@2.0.36 pinia-plugin-persistedstate
~~~

~~~ts
// src/stores/modules/useCounterStore.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'count',
  () => {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  },
  {
    persist: true
  }
)

// src/stores/index.ts
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate' // 数据持久化

const store = createPinia()
store.use(
  createPersistedState({
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync
    }
  })
)

export * from './modules/counter'

export default store

// main.ts
import { createSSRApp } from 'vue'
import App from '@/App.vue'
// import gloablComponents from './components/index'
import pinia from '@/stores'
import 'virtual:svg-icons-register'
export function createApp() {
  const app = createSSRApp(App)
  // app.use(gloablComponents)
  app.use(pinia)
  return {
    app
  }
}
~~~

# 13. scss 样式：

~~~bash
pnpm i sass sass-loader@10.1.1 -D
~~~

~~~scss
// 静态文件建议都放在static下
// styles/index.scss
@import '@/uni.scss';
@import '@/static/styles/common.scss';

// styles/common.scss 放置全局公共类样式
@import '@/uni.scss';

page {
  background-color: $uni-bg-color-grey;
}

.dou-btn-primary {
  color: $uni-color-primary;
}

.dou-bg-primary {
  background-color: $uni-bg-color-grey;
  color: $uni-text-color;
}

// 初始化样式 base.scss
view,
navigator,
input,
scroll-view {
  box-sizing: border-box;
}

button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 两行省略
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

~~~

~~~vue
// 在 App.vue 中引入index.scss
<style lang="scss">
  @import 'static/styles/index.scss';
</style>
~~~

~~~ts
// 在 vite.config.ts 引入全局
css: {
    preprocessorOptions: {
      scss: {
        // 全局 scss 变量
        additionalData: `@import "@/uni.scss";`
      }
    }
  }

// main.ts
import '@/static/styles/index.scss'
~~~

# 14. uview-plus 组件库：

~~~bash
pnpm install uview-plus
~~~

~~~ts
// main.ts
import uviewPlus from 'uview-plus'
app.use(uviewPlus)
// 修改默认单位为rpx
uni.$u.config.unit = 'rpx'
~~~

~~~scss
// uni.scss
@import 'uview-plus/theme.scss';
~~~

~~~json
// pages.json
"custom": {
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^dou-(.*)": "@/components/dou-$1.vue"
    }
~~~

~~~ts
// env.d.ts
/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'uview-plus'
~~~

~~~ts
// 解决 $u 报错的问题
// 新建 types/index.d.ts
declare module 'uview-plus' {
  export function install(): void

  interface test {
    /** 邮箱格式校验 */
    email(email: string): boolean
  }
  interface $u {
    config: config
    props: props
    test: test
  }

  global {
    interface Uni {
      $u: $u
    }
  }
}
~~~

~~~scss
// index.scss
@import 'uview-plus/index.scss';
~~~

# 15. uni-ui 使用：

~~~bash
pnpm i @dcloudio/uni-ui
# 类型声明
pnpm i -D @uni-helper/uni-ui-types
# 微信小程序定义文件
pnpm i -D miniprogram-api-typings
# 删除 @types/wechat-miniprogram
~~~

~~~json
// tsconfig.json
{
    "types": [
      "@dcloudio/types", // uni-app API 类型
      // "vite-plugin-svg-icons/client",
      // "vite-svg-loader",
      "miniprogram-api-typings", // 微信小程序 API 类型
      "@uni-helper/uni-app-types", // uni-app 组件类型
      "@uni-helper/uni-ui-types" // uni-ui 组件类型
    ]
  },
  "vueCompilerOptions": {
    "nativeTags": ["block", "template", "component", "slot"],
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "./auto-imports.d.ts"
  ]
}
~~~

~~~json
// pages.json
"custom": {
      // uni-ui 组件
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      // uView 组件
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      // dou 自定义组件
      "^dou-(.*)": "@/components/dou-$1.vue"
    }
~~~

# 16. 导航栏：

~~~json
// 创建个my、login、register三个页面
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      // uni-ui 组件
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      // uView 组件
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      // dou 自定义组件
      "^dou-(.*)": "@/components/dou-$1.vue"
    }
  },
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
        "navigationStyle": "custom", // 去除顶部默认
				"navigationBarTitleText": "index",
        "navigationBarBackgroundColor": "#F7F7F7"
			}
		},
    {
			"path": "pages/login/login",
			"style": {
        "navigationStyle": "custom", // 去除顶部默认
				"navigationBarTitleText": "login",
        "navigationBarBackgroundColor": "#F7F7F7"
			}
		},
    {
			"path": "pages/register/register",
			"style": {
        "navigationStyle": "custom", // 去除顶部默认
				"navigationBarTitleText": "register",
        "navigationBarBackgroundColor": "#F7F7F7"
			}
		},
    {
			"path": "pages/my/my",
			"style": {
				"navigationBarTitleText": "my"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
    "navigationBarTitleText": "",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
	},
  "tabBar": {
    "color": "#2f2f2f",
		"selectedColor": "#167cf8",
		"backgroundColor": "#ffffff",
		"borderStyle": "black",
    "list": [
      {
				"pagePath": "pages/index/index",
				"text": "首页",
				"iconPath": "static/tabBar/index.png",
				"selectedIconPath": "static/tabBar/index_selected.png"
			},
			{
				"pagePath": "pages/my/my",
				"text": "我的",
				"iconPath": "static/tabBar/my.png",
				"selectedIconPath": "static/tabBar/my_selected.png"
			}
    ]
  }
}
~~~



