<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-02 18:19:37
 * @LastEditTime: 2020-12-06 17:27:19
-->
<template>
  <div class="nav_bar">
    <ul style="list-style: none">
      <li>Nosql 数据库系统项目</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
.nav_bar {
  position: fixed;
  /* height:56px; */
  width: 100%;
  flex: none;
  order: 1;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  background: #515a6e;
  border-bottom: 1px solid #ddd;
  z-index: 20;
}

.nav_bar ul li {
  float: left;
  margin: 10px;
  margin-left: 55px;
  
}
</style>