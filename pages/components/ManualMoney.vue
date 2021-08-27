<template>
  <el-dialog
    title='手工打款'
    :visible.sync='dialogVisible'
    width='30%'>
    <el-form label-width='85px'>
      <el-form-item label='提现金额：'>
        {{price}}
      </el-form-item>
      <el-form-item label='备注：'>
        <el-input
          type='textarea'
          :rows='4'
          placeholder='请输入内容'
          v-model='remark'>
        </el-input>
      </el-form-item>
    </el-form>
    <span slot='footer' class='dialog-footer'>
     <el-button @click='dialogVisible = false'>取 消</el-button>
     <el-button type='primary' @click='confirm'>确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { update } from '../../api/withdraw'

  export default {
    name: 'ManualMoney',
    data() {
      return {
        dialogVisible: false,
        remark: '',
        price: 0,
        id: ''
      }
    },
    methods: {
      confirm() {
        let data = {
            "remark": this.remark,
            "state": 1
          };
          update(this.id, data, this)
            .then((res) => {
              if (res.data.code == 1) {
                this.dialogVisible = false;
                this.$parent.getDataList();
                this.$message.success("成功");
                this.remark = "";
              }
            })
            .catch((error) => {
              this.$message.error(error.response.data.message);
            });
      }
    }
  }
</script>

<style scoped>

</style>
