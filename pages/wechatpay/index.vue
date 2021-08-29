<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class='main-title'>
          <div class='main-title_top'>
            <b>微信设置</b>
          </div>
        </div>
        <div class='main-content mg-tp-20'>
          <div class='col-wechatpay-form'>
            <el-form label-position='left' ref='form' :model='form' label-width='110px'>
              <el-form-item label='微信提现'>
                <el-switch
                  v-model='form.wechatpay'
                  active-color='#13ce66'>
                </el-switch>
              </el-form-item>
              <el-form-item v-if='form.wechatpay' label='提现方式'>
                <el-radio v-model='form.radio' label='automaticWithdrawal'>自动提现</el-radio>
                <el-radio v-model='form.radio' label='manualWithdrawal'>手动提现</el-radio>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='App ID'>
                <el-input placeholder='请输入App ID'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='AppSecret'>
                <el-input placeholder='请输入AppSecret'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='微信支付商户号'>
                <el-input placeholder='请输入微信支付商户号'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='API密钥'>
                <el-input placeholder='请输入API密钥'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='员工登录账号'>
                <el-input placeholder='请输入员工登录账号'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='API证书'>
                <el-input placeholder='请输入API证书'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'" label='API证书密钥'>
                <el-input placeholder='请输入API证书密钥'></el-input>
              </el-form-item>
              <el-form-item v-if="form.wechatpay&&form.radio=='automaticWithdrawal'">
                <el-button type='primary'>提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>
