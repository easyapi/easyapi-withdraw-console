<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class='main-title'>
          <div class='main-title_top'>
            <b>提现列表</b>
          </div>
        </div>
        <div class='main-content mg-tp-20'>
          <SearchArea :items='searchItems' @search='search' @event='event' />
        </div>
        <div class='main-content mg-tp-20'>
          <div>
            <el-button type='primary' class='buttons' size='mini' @click='refuse' :disabled='disabled'>申请拒绝
            </el-button>
            <el-button type='primary' class='buttons' size='mini' @click='ifAutomaticMoney' :disabled='autDisabled'>
              自动打款
            </el-button>
            <el-button type='primary' class='buttons' size='mini' @click='ifManualMoney' :disabled='disabled'>手工打款
            </el-button>
          </div>
          <el-table
            class='mg-tp-15'
            v-loading='loading'
            ref='selection'
            :data='tableData'
            @selection-change='handleRowChange'
            highlight-row
            :header-cell-style="{ background: '#F4F4F4' }"
          >
            <el-table-column type='selection' width='60'></el-table-column>
            <el-table-column width='160' prop='addTime' label='提现时间'></el-table-column>
            <el-table-column prop='username' label='用户名称'></el-table-column>
            <el-table-column prop='no' label='交易号'></el-table-column>
            <el-table-column prop='way' label='提现方式'></el-table-column>
            <el-table-column prop='account' label='提现账号'>
              <template slot-scope='{ row }'>
                <span v-if="row.way === '微信'">{{ row.name }}</span>
                <span v-else-if="row.way === '支付宝'">{{ row.name }} {{row.account}}}</span>
                <span v-else-if="row.way === '银行卡'">{{ row.channel }} {{ row.name }} {{ row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column prop='price' label='提现金额'></el-table-column>
            <el-table-column prop='taxation' label='税费'></el-table-column>
            <el-table-column prop='serviceCharge' label='平台手续费'></el-table-column>
            <el-table-column label='实际提现金额'>
              <template slot-scope='{ row }'>
                {{ row.price - row.taxation - row.serviceCharge }}
              </template>
            </el-table-column>
            <el-table-column prop='state' label='状态'>
              <template slot-scope='{ row }'>
                <el-tag v-if='row.state === 0'>提现中</el-tag>
                <el-tag type='success' v-else-if='row.state === 1'>已成功</el-tag>
                <el-tag type='danger' v-else-if='row.state === -1'>失败</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop='remark' label='备注'></el-table-column>
            <el-table-column label='操作'>
              <template slot-scope='scope'>
                <el-button type='text' @click='showDetails(scope.row)'>详情</el-button>
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
    <ManualMoney ref='child'></ManualMoney>
    <show-details ref='detailsChild'></show-details>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>
