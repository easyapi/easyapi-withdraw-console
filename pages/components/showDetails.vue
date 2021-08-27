<template>
  <el-dialog title="提现详情" :visible.sync="dialogVisible" width="40%">
    <div class="col-form">
      <div>
        <span class="icon"></span>
        <span>用户信息</span>
      </div>
      <el-form
        ref="form"
        labelPosition="left"
        :model="form"
        label-width="100px"
      >
        <el-form-item label="用户名称">
          <span>{{ form.username }}</span>
        </el-form-item>
        <el-form-item label="提现账号">
          <span>{{ form.account }}</span>
        </el-form-item>
        <el-form-item label="账号类型">
          <span>{{ form.way }}</span>
        </el-form-item>
      </el-form>
      <div>
        <span class="icon"></span>
        <span>提现信息</span>
      </div>
      <el-form
        ref="form"
        labelPosition="left"
        :model="form"
        label-width="100px"
      >
        <el-form-item label="提现时间">
          <span>{{ form.addTime }}</span>
        </el-form-item>
        <el-form-item label="交易号">
          <span>{{ form.no }}</span>
        </el-form-item>
        <el-form-item label="提现状态">
          <span v-if="form.state == 0">
              <el-tag type="warning">提现中</el-tag>
            </span>
            <span v-if="form.state == 1">
              <el-tag type="success">提现成功</el-tag>
            </span>
            <span v-if="form.state == -1">
              <el-tag type="info">提现失败</el-tag>
            </span>
        </el-form-item>
        <el-form-item label="提现金额">
          <span>{{ form.price }}</span>
        </el-form-item>
        <el-form-item label="税费">
          <span>{{ form.taxation }}</span>
        </el-form-item>
        <el-form-item label="平台手续费">
          <span>{{ form.serviceCharge }}</span>
        </el-form-item>
        <el-form-item label="实际提现金额">
          <span>{{ form.price - form.taxation - form.serviceCharge }}</span>
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
            v-model="form.remark"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="danger" @click="dialogVisible = false"
        >申请拒绝</el-button
      >
      <el-button type="primary" @click="ifAutomaticMoney">自动打款</el-button>
      <el-button type="primary" @click="confirm">手工打款</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { update, automatic } from '../../api/withdraw'

export default {
  name: 'showDetails',
  data() {
    return {
      dialogVisible: false,
      form: {}
    }
  },
  methods: {
    confirm() {
      let data = {
        remark: this.form.remark,
        state: 1,
      }
      update(this.form.withdrawId, data, this)
        .then((res) => {
          if (res.data.code == 1) {
            this.dialogVisible = false
            this.$parent.getDataList()
            this.$message.success('成功')
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.message)
        })
    },

    ifAutomaticMoney() {
      this.$confirm('是否确定自动打款, 确认后无法更改。', '自动打款', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        //拼ID逗号分开
        let data = {
          ids: this.form.withdrawId,
        }
        automatic(data, this)
          .then((res) => {
            if (res.data.code == 1) {
              this.dialogVisible = false
              this.$parent.getDataList()
              this.$message.success('操作完成')
            }
          })
          .catch((error) => {
            this.$message.error(error.response.data.message)
          })
      })
    },
    /**
     * 拒绝
     */
    refuse() {
      let data = {
        state: -1,
      }
      update(this.form.withdrawId, data, this)
        .then((res) => {
          if (res.data.code == 1) {
            this.dialogVisible = false
            this.$parent.getDataList()
            this.$message.success('成功')
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.message)
        })
    },
  },
}
</script>

<style lang='scss'>
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
