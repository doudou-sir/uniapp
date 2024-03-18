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

