<template>
  <el-dialog
    title='手工打款'
    :visible.sync='dialogVisible'
    width='30%'>
    <el-form label-width='85px'>
      <el-form-item label='提现金额：'>
        972.00
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
     <el-button type='primary' @click='dialogVisible = false'>确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'ManualMoney',
    data() {
      return {
        dialogVisible: false,
        remark: ''
      }
    }
  }
</script>

<style scoped>

</style>
