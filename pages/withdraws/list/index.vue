<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div class='main'>
        <div class='main-title'>
          <div class='main-title_top'>
            <b>提现列表</b>
          </div>
        </div>
        <div class='main-content mg-tp-20'>
          <SearchArea :items='searchItems' @search='search' @event='event'/>
        </div>
        <div class='main-content mg-tp-20'>
          <div>
            <el-button type='primary' class='buttons' size='mini'>申请拒绝
            </el-button>
            <el-button type='primary' class='buttons' size='mini' @click="ifAutomaticMoney">自动打款
            </el-button>
            <el-button type='primary' class='buttons' size='mini' @click="ifManualMoney">手工打款
            </el-button>
          </div>
          <el-table class='mg-tp-15' v-loading='loading' ref='selection' :data='tableData'
                    @selection-change='handleRowChange' highlight-row
                    :header-cell-style="{ background: '#F4F4F4' }"
          >
            <el-table-column
              type='selection'
              width='60'>
            </el-table-column>
            <el-table-column width="160" prop='withdrawalTime' label='提现时间'></el-table-column>
            <el-table-column prop='username' label='用户名称'></el-table-column>
            <el-table-column prop='number' label='交易号'></el-table-column>
            <el-table-column prop='accountType' label='账号类型'></el-table-column>
            <el-table-column prop='cashAccount' label='提现账号'></el-table-column>
            <el-table-column prop='amount' label='提现金额'></el-table-column>
            <el-table-column prop='tax' label='税费'></el-table-column>
            <el-table-column prop='serviceCharge' label='平台手续费'></el-table-column>
            <el-table-column prop='price' label='实际提现金额'></el-table-column>
            <el-table-column prop='state' label='状态'></el-table-column>
            <el-table-column prop='remark' label='备注'></el-table-column>
            <el-table-column label='操作'>
              <template slot-scope='scope'>
                <el-button type="text" @click="showDetails(scope.row)">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <Pagination
            @fatherSize='fatherSize'
            @fatherCurrent='fatherCurrent'
            :size='pagination.size'
            :total-elements='pagination.total'
            class='paging'
          ></Pagination>
          <div style='clear: both'></div>
        </div>
      </div>
    </div>
    <ManualMoney ref="child"></ManualMoney>
    <show-details ref="detailsChild"></show-details>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>
