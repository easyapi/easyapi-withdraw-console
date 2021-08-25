<template>
  <el-dialog
    title='提现详情'
    :visible.sync='dialogVisible'
    width='30%'>
    <div class='col-mockTest'>
      <el-input
        type='textarea'
        :rows='6'
        placeholder='请输入内容'>
      </el-input>
      <el-button type='primary'>发送提现成功通知</el-button>
      <el-input
        type='textarea'
        :rows='6'
        placeholder='请输入内容'>
      </el-input>
      <el-button type='primary'>发送审核拒绝通知</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'mockTest',
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang='scss'>
.col-mockTest {
  .el-button {
    margin: 10px 0;
  }
}
</style>
