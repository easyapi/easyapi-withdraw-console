<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'" >
        <div class='main-title'>
          <div class='main-title_top'>
            <b>银行卡设置</b>
          </div>
        </div>
        <div class='main-content mg-tp-20'>
          <div class='col-bankCardPay-form'>
            <el-form label-position='left' ref='form' :model='form' label-width='110px'>
              <el-form-item label='银行卡'>
                <el-switch
                  v-model='form.banCardPay'
                  active-color='#13ce66'>
                </el-switch>
              </el-form-item>
              <el-form-item v-if='form.banCardPay' label='提现方式'>
                <el-radio v-model='form.radio' label='automaticWithdrawal'>自动提现</el-radio>
                <el-radio v-model='form.radio' label='manualWithdrawal'>手动提现</el-radio>
              </el-form-item>
              <el-form-item v-if="form.banCardPay&&form.radio=='automaticWithdrawal'" label='服务商'>
                <el-select v-model='form.facilitator'>
                  <el-option
                    v-for='item in facilitatorArr'
                    :key='item.value'
                    :label='item.label'
                    :value='item.value'>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="form.banCardPay&&form.radio=='automaticWithdrawal'">
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
