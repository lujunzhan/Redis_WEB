<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-01 22:24:10
 * @LastEditTime: 2020-12-06 20:59:02
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-01 22:24:10
 * @LastEditTime: 2020-12-01 23:37:33
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <!-- <router-link to="/main">主页</router-link> -->
    </div>

    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
