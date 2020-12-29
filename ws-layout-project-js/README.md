參考專案：[Stancare App](https://gitlab.com/yuyanghh/stancare_app/-/tree/master/public)

### 專案目的

不透過Vue Cli打包Vue檔成靜態JS提供客戶，

客戶直接透過靜態檔案串接資料

### 專案結構

``` 

ws-layout-project-js/
┣ public/  --靜態檔案夾
┃ ┣ assets/
┃ ┃ ┣ icomoon/  --icons字體
┃ ┃ ┗ images/  --圖片資料夾
┃ ┣ css/
┃ ┃ ┗ app.css  --打包後CSS檔案
┃ ┣ js/
┃ ┃ ┣ pages/
┃ ┃ ┃ ┗ example-page.js  --頁面JS
┃ ┃ ┗ vue-components-build.js  --打包後Vue Components JS
┃ ┗ example-page.html  --頁面HTML
┣ resources/
┃ ┣ js/
┃ ┃ ┣ components/
┃ ┃ ┃ ┗ ExampleComponent.vue  --Vue components
┃ ┃ ┗ vue-components-build.js  --Vue 設定檔 (類似Vue Cli的main.js)
┃ ┗ scss/
┃   ┣ components/
┃ ┃ ┃ ┗ _example-component.scss  --Vue components SCSS
┃   ┣ views/
┃ ┃ ┃ ┗ _example-page.scss  --頁面 SCSS
┃   ┗ app.scss  --主要SCSS檔案 (記得import wasateam樣式)
┣ README.md
┣ mix-manifest.json
┣ package-lock.json
┣ package.json
┣ webpack.mix.js  --webpack打包設定檔
┗ yarn.lock
```

### 指令

``` 
yarn install // 安裝套件
yarn watch // 開發過程中，即時打包成靜態檔案
```
