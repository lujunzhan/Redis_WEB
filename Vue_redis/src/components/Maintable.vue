<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-04 16:34:31
 * @LastEditTime: 2020-12-15 21:16:20
-->

<template>
  <div class="main_card">
    <Select
      v-model="data_type"
      placeholder="String"
      style="width: 100px; margin-right: 5px"
      @on-change="SelectChoice"
    >
      <Option value="String">String</Option>
      <Option value="Hash">Hash</Option>
      <Option value="List">List</Option>
      <Option value="Set">Set</Option>
      <Option value="Zset">Zset</Option>
    </Select>

    <Input
      v-model="input_order"
      placeholder="operator key value expired"
      style="width: 400px"
    />
    <span style="margin-left: 20px">
      <Button type="primary" @click="checkData()">确定</Button>
    </span>
    <div style="margin: 30px">
      <Table height="420" :columns="columns1" :data="table_data"></Table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Maintable",

  data() {
    return {
      input_order: "",
      data_type: "String",
      columns1: [
        {
          title: "DataType",
          key: "type",
          sortable: true,
        },
        {
          title: "Operator",
          key: "operator",
          sortable: true,
        },
        {
          title: "Operand",
          key: "operand",
          sortable: true,
        },
        {
          title: "Message",
          key: "msg",
          sortable: true,
        },
        {
          title: "Time",
          key: "time",
          sortable: true,
        },
      ],

      table_data: [
        // {
        //   type: "String",
        //   operator: "set",
        //   operand: "name lujunzhan",
        //   msg: "Success",
        //   time: "下午7:16:10",
        // },
        // {
        //   type: "String",
        //   operator: "get",
        //   operand: "name lujunzhan",
        //   msg: "failure",
        //   time: "下午7:16:10",
        // },
        // {
        //   type: "Hash",
        //   operator: "del",
        //   operand: "name lujunzhan",
        //   msg: "success",
        //   time: "下午7:16:10",
        // },

 
      ],
    };
  },
  methods: {
    SelectChoice() {
      console.log(this.data_type);
    },

    // 确定
    checkData() {
      let _this = this;
      let input_order = this.input_order;
      let data_type = this.data_type;

      //对输入的数据进行校验
      function validate() {
        if (input_order == "") return false;
        else return true;
      }
      
      //进行全局提示
      function show_alert(code) {

        if (code == "200") {

          _this.$Notice.success({
            title:'操作成功!',
          
          })

        } else if (code == "300") {
          _this.$Message.warning("操作失败！");
        } else if (code == "400") {
          _this.$Message.error("操作错误！");
        }
      }

      let nowDate = new Date();
      let nowtime = nowDate.toLocaleTimeString();

      console.log(nowtime);

      let url = "/classify";

      if (validate()) {
        this.$http
          .post(url, {
            data_type: data_type,
            input_order: input_order,
            operate_time: nowtime,
          })
          .then(function (res) {
            console.log(res);

            if (res.status == "200") {
              _this.table_data.push(res.data);
              show_alert(res.data.code);
            }

            
          })
          .catch(function (err) {
            console.log(err);
            _this.$Message.warning("请检查您的输入！");
          });
      } else {
        _this.$Message.warning("请检查您的输入！");
      }
    },
  },
};
</script>

<style scoped>
.main_card {
  border-radius: 3px;
  height: 95%;
  background-color: #fff;
  padding: 16px;
  padding-top: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 2px;
}
</style>