<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-02 14:55:29
 * @LastEditTime: 2020-12-12 00:14:02
-->
<style>
/* 弹性盒子 */
.inline_box {
  display: -webkit-flex;
  flex-direction: row; /*默认*/
  margin: 10px 10px;
}
/* 热点名称 */
.show_title {
  float: left;
  width: 160px;
  flex: 7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
/* 热榜排行前三 */
.index_pre {
  float: left;
  margin-right: 12px;
  color: #ec5858;
  flex: 2;
  font-weight: bold;
}
/* 热榜排行之后的 */
.index_later {
  float: left;
  margin-right: 12px;
  color: #999;
  flex: 2;
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
<template>
  <div>
    <!-- <div style="height:40px;background:white;">
      <p slot="title">
        <Icon type="md-flame" color="#ec5858" size="24" />
        热搜榜
      </p>
    </div> -->

    <Card style="width: 280px; height: calc(95vh); overflow-y: auto">
      <p slot="title">
        <Icon type="md-flame" color="#ec5858" @click="getData()" />
        热搜榜
      </p>

      <a href="#" slot="extra" @click.prevent="crawl_data()">
        <Icon type="ios-loop-strong"></Icon>
        Refresh
      </a>

      <List>
        <!-- <ul style="list-style: none"> -->
        <ListItem
          v-for="(item, index) in hotList"
          :key="item.name"
          style="padding: 0"
        >
          <div class="inline_box">
            <!-- <li v-for="(item, index) in randomMovieList" :key="item.name"> -->
            <span v-if="index < 3">
              <span class="index_pre">{{ index + 1 }}</span>
            </span>

            <span v-else>
              <span class="index_later">{{ index + 1 }}</span>
            </span>

            <span class="show_title" :title="item.name">
              <a
                href="javascript:void(0);"
                @click="add_scores(item.name, item.scores, index)"
                >{{ item.name }}</a
              >
            </span>

            <span style="float: right; flex: 2">
              <!-- <Icon type="ios-star" v-for="n in 4" :key="n" ></Icon>
            <Icon type="ios-star" v-if="item.scores >= 9.5"></Icon>
            <Icon type="ios-star-half" v-else></Icon> -->
              {{ item.scores }}
            </span>
            <!-- <Row v-for="(item, index) in randomMovieList" :key="item.name">
            <Col span="8">{{ index + 1 }} </Col>
            <Col span="8">{{ item.scores }} </Col>
            <Col span="8">{{ item.scores }} </Col>
          </Row> -->
            <!-- </li> -->
          </div>
        </ListItem>
        <!-- </ul> -->
      </List>
    </Card>
  </div>
</template>

<script>
import Msg from './Msg.js'
export default {
  name: "Hotlist",
  //     props: {
  //     msg: String
  //   }
  data() {
    return {
      hotList: [
        {
          name: "The Shawshank Redemption",
          url: "",
          scores: 9.6,
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          scores: 9.4,
        },
        {
          name: "Farewell to My Concubine",
          url: "https://movie.douban.com/subject/1291546/",
          scores: 9.5,
        },
        {
          name: "Forrest Gump",
          url: "https://movie.douban.com/subject/1292720/",
          scores: 9.4,
        },
        {
          name: "Life Is Beautiful",
          url: "https://movie.douban.com/subject/1292063/",
          scores: 9.5,
        },
        {
          name: "Spirited Away",
          url: "https://movie.douban.com/subject/1291561/",
          scores: 9.2,
        },
        {
          name: "The Legend of 1900",
          url: "https://movie.douban.com/subject/1292001/",
          scores: 9.2,
        },
        {
          name: "WALL·E",
          url: "https://movie.douban.com/subject/2131459/",
          scores: 9.3,
        },
        {
          name: "Inception",
          url: "https://movie.douban.com/subject/3541415/",
          scores: 9.2,
        },
      ],
      randomMovieList: [],
    };
  },
  methods: {
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }

        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      this.randomMovieList = getArrayItems(this.hotList, 9);
    },

    getData() {
      let _this = this;
      this.$http
        .post("/spider", { data: "getList" })
        .then(function (res) {
          console.log(res);

          //显示提醒
          _this.$Notice.success({
            title: "返回数据：",
            desc: res.data.data.length,
          });

          if (res.status == 200) {
            _this.$Message.success("请求成功！状态码：" + res.status);
            _this.hotList = res.data.data;
          } else {
            _this.$Message.warning("出现问题!状态码：" + res.status);
          }
        });
    },
    //爬取数据装载进数据库内
    crawl_data()
    {
      // let _this =this
      
      this.$http.post("/crawl")
      .then(function(res)
      {
        console.log(res)

      }).catch(function(err){
        console.log(err)
      })

    },
    //初始化热榜
    load_hot() {
      let _this = this;
      this.$http.post("/hotinit").then(function (res) {
        console.log(res);
        //显示提醒
        _this.$Notice.success({
          title: "加载数据成功！",
          // desc: res.data,
        });

        if (res.status == 200) {
          _this.hotList = res.data.data;
        }
      });
    },
    //热榜增加热度函数
    add_scores(name, score, index) {

      console.log(name);
      let data = {}

      let nowDate = new Date();
      let nowtime = nowDate.toLocaleTimeString();

      data.time = nowtime;
      data.title = name;

      Msg.$emit('hot',data);

      let _this = this;
      this.$http
        .post("/hotadd", {
          hot_title: name,
          hot_score: score,
        })
        .then(function (res) {
          console.log(res.data);
          //显示提醒
          if (res.status == 200) {
            console.log(_this.hotList[index]);
            console.log(res.data);

            _this.$Message.success("热度增加成功！");
          }

        }
        );

    },
  },
  mounted() {
    // this.changeLimit();
    this.load_hot();
    // this.getData();
  },
};
</script>

