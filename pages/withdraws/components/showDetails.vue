<template>
  <el-dialog
    title="提现详情"
    :visible.sync="dialogVisible"
    width="40%">
    <div class="col-form">
      <div>
        <span class="icon"></span>
        <span>用户信息</span>
      </div>
      <el-form ref="form" labelPosition="left" :model="form" label-width="100px">
        <el-form-item label="用户名称">
          <span>{{form.username}}</span>
        </el-form-item>
        <el-form-item label="提现账号">
          <span>{{form.cashAccount}}</span>
        </el-form-item>
        <el-form-item label="账号类型">
          <span>{{form.accountType}}</span>
        </el-form-item>
      </el-form>
      <div>
        <span class="icon"></span>
        <span>提现信息</span>
      </div>
      <el-form ref="form" labelPosition="left" :model="form" label-width="100px">
        <el-form-item label="提现时间">
          <span>{{form.withdrawalTime}}</span>
        </el-form-item>
        <el-form-item label="交易号">
          <span>{{form.number}}</span>
        </el-form-item>
        <el-form-item label="提现状态">
          <span>{{form.state}}</span>
        </el-form-item>
        <el-form-item label="提现金额">
          <span>{{form.amount}}</span>
        </el-form-item>
        <el-form-item label="税费">
          <span>{{form.tax}}</span>
        </el-form-item>
        <el-form-item label="平台手续费">
          <span>{{form.serviceCharge}}</span>
        </el-form-item>
        <el-form-item label="实际提现金额">
          <span>{{form.price}}</span>
        </el-form-item>
      </el-form>
      <div>
        <span class="icon"></span>
        <span>备注信息</span>
      </div>
      <el-form ref="form" labelPosition="left" :model="form">
        <el-form-item label="">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.remark">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
     <el-button type="danger" @click="dialogVisible = false">申请拒绝</el-button>
     <el-button type="primary" @click="dialogVisible = false">自动打款</el-button>
     <el-button type="primary" @click="dialogVisible = false">手工打款</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'showDetails',
    data() {
      return {
        dialogVisible: false,
        form: {}
      }
    }
  }
</script>

<style lang="scss">

  .col-form {
    .el-form-item {
      margin-bottom: 0;

      .el-form-item__label {
        margin-left: 34px;
      }

      .el-textarea {
        margin-left: 34px;
        margin-top: 15px;
        width: 300px;
      }
    }

    .icon {
      width: 3px;
      height: 10px;
      background: blue;
    }
  }

</style>
