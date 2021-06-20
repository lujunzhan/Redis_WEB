<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-01 22:24:10
 * @LastEditTime: 2020-12-06 19:37:22
-->
<template>
  <div>
    
    <Nav />

    <div class="left_list">
      <Pointlist />
    </div>

    <div class="main_show">
      <Bread/>
      <Maintable/>
    </div>
    
    <div class="right_list">
      <Hotlist />
    </div>

  </div>
</template>

<script>
import Hotlist from "../components/Hotlist";
import Pointlist from "../components/Pointlist";
import Nav from "../components/Nav";
import Maintable from "../components/Maintable";
import Bread from  "../components/Bread";

import "view-design/dist/styles/iview.css";

export default {
  components: {
    Hotlist,
    Nav,
    Pointlist,
    Maintable,
    Bread
  },
  data() {
    return {
      
    };
  },
  methods: {

  },
};
</script>

<style>
.main_show {
  margin-left: 240px;
  margin-right: 280px;
  background-color: #f5f7f9;
  height: 96vh;
  padding: 16px;
}

.left_list {
  position: fixed;
  /* left: -280px; */
  top: 42px;
  bottom: 0;
  width: 240px;
  /* border-right: 1px solid #ddd; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 2px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  transition: left 0.25s ease;
  padding: 20px;
  height: 95vh;
  overflow-y:auto;
}

.right_list {
  position: fixed;
  right: 0;
  top: 42px;
  bottom: 0;
  width: 280px;
  border-right: 1px solid #ddd;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  transition: left 0.25s ease;
}
</style>