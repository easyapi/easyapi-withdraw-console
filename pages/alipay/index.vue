<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'" >
        <div class='main-title'>
          <div class='main-title_top'>
            <b>支付宝设置</b>
          </div>
        </div>
        <div class='main-content mg-tp-20'>
          <div class='col-alipay-form'>
            <el-form label-position='left' ref='form' :model='form' label-width='150px'>
              <el-form-item label='支付宝提现'>
                <el-switch
                  v-model='form.alipay'
                  active-color='#13ce66'>
                </el-switch>
              </el-form-item>
              <el-form-item v-if='form.alipay' label='提现方式'>
                <el-radio v-model='form.radio' label='automaticWithdrawal'>自动提现</el-radio>
                <el-radio v-model='form.radio' label='manualWithdrawal'>手动提现</el-radio>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='支付宝版本'>
                <el-select v-model='form.alipayVersion' placeholder='请选择'>
                  <el-option
                    v-for='item in alipayVersionArr'
                    :key='item.value'
                    :label='item.label'
                    :value='item.value'>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='是否启用免密接口'>
                <el-select v-model='form.withoutCode' placeholder='请选择'>
                  <el-option
                    v-for='item in withoutCodeArr'
                    :key='item.value'
                    :label='item.label'
                    :value='item.value'>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='合作伙伴身份（PID）'>
                <el-input placeholder='请输入合作伙伴身份'></el-input>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='支付宝账号'>
                <el-input placeholder='请输入支付宝账号'></el-input>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='MD5密钥'>
                <el-input placeholder='请输入MD5密钥'></el-input>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='支付宝公钥'>
                <el-input placeholder='请输入支付宝公钥'></el-input>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'" label='应用私钥'>
                <el-input placeholder='请输入应用私钥'></el-input>
              </el-form-item>
              <el-form-item v-if="form.alipay&&form.radio=='automaticWithdrawal'">
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
