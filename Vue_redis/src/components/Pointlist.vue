<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-02 19:30:00
 * @LastEditTime: 2020-12-06 21:28:28
-->

<template>
  <div>
    <Timeline>
      <span>
        <TimelineItem color="white">
          <Icon type="ios-clock-outline" size="24" color="gray"></Icon>
          <span style="padding-left: 5px; font-size: 15px">历史访问足迹 <a style="margin-left:10px" @click="flush_history()">Clean</a></span>

        </TimelineItem>
      </span>

      <TimelineItem color="blue" v-for="(item, index) in history" :key="index">
        <p class="time">{{ item.time }}</p>
        <p class="content">{{ item.title }}</p>
      </TimelineItem>

      <TimelineItem v-if="history.length == 0">
        <p>这里暂时没有内容</p>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
import Msg from "./Msg";

export default {
  data() {
    return {
      history: [],
    };
  },
  methods: {
    //清空足迹列表
    flush_history() {
      if (this.history.length == 0) {
        this.$Message.warning("已经没有内容了");
      } else {
        this.history = [];
        this.$Message.success("足迹清空成功");
      }
    },
  },
  mounted() {
    let _this = this;
    
    Msg.$on("hot", function (e) {
      console.log("point:", e);
      _this.history.push(e);
    });

  },
};
</script>

<style scoped>
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}

.line_title {
  margin-top: 0;
  margin: 10px;
}
</style>