<template>
  <el-dialog
    title="手工打款"
    :visible.sync="dialogVisible"
    width="30%">
    <el-form label-width="85px">
      <el-form-item label="提现金额：">
        972.00
      </el-form-item>
      <el-form-item label="支付通道：">
        <el-select v-model="value" placeholder="请选择支付通道">
          <el-option
            v-for="item in accountType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="remark">
        </el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
     <el-button @click="dialogVisible = false">取 消</el-button>
     <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'ManualMoney',
    data() {
      return {
        dialogVisible: false,
        accountType: [
          {
            value: '支付宝',
            label: '支付宝'
          },
          {
            value: '微信',
            label: '微信'
          },
          {
            value: '银行卡',
            label: '银行卡'
          }
        ],
        remark: ''
      }
    }
  }
</script>

<style scoped>

</style>
