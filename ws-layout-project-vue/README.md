參考專案：[Stancare LIFF APP](https://gitlab.com/wasateam/ws_projects/juan/2020_stancare_liff/2020_stancare_liff_frontend)

### 專案目的

Vue純切版(假資料)及功能，不處理資料串接

### 專案結構

### 注意事項

給客戶串接資料時，對方工程師會使用computed回傳Store更新的資料，

且對方不修改components，所以我們要由頁面檔(Index.vue)傳入computed到component做呈現/處理，當假資料更新時，為了Demo效果，會set computed。之候對方工程師會直接更新Store資料，computed值一同更新，效果一致。

或是我們先定義好Store結構，讓對方工程師直接參照處理
