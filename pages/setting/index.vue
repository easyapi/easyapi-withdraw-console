<template>
  <div class="container">
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class="main-title">
          <div class="main-title_top">
            <b>参数设置</b>
          </div>
        </div>
        <div class="main-content mg-tp-20">
          <div class="col-setting-form">
            <el-form
              label-position="left"
              ref="form"
              :model="form"
              label-width="110px"
            >
              <el-form-item label="提现结果通知">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-button @click="showMockTest">模拟测试</el-button>
              </el-form-item>
              <el-form-item label="提现说明">
                <el-input type="textarea" :rows="6" placeholder="请输入内容">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <mock-test ref="child"></mock-test>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>
