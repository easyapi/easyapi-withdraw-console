<template>
  <div class="container">
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class="main-title">
          <div class="main-title_top">
            <b>开票汇总</b>
          </div>
        </div>
        <div class="main-content">
          <el-tabs v-model="activeName" type="card" @tab-click="changeTab">
            <!--            <el-tab-pane label='发票汇总' name='summary'></el-tab-pane>-->
            <el-tab-pane label="每日统计" name="daily"></el-tab-pane>
            <el-tab-pane label="每月统计" name="monthly"></el-tab-pane>
          </el-tabs>
          <el-date-picker
            v-model="dataTime"
            type="month"
            @change="changeDate"
            placeholder="选择日期"
            value-format="yyyy-MM"
          >
          </el-date-picker>
          <div class="daily-table">
            <el-table
              v-loading="loading"
              element-loading-spinner="el-icon-loading"
              element-loading-text="老铁别急，这就给你整上..."
              :data="summaryData"
              style="width: 100%; margin-top: 15px"
              :header-cell-style="{ background: '#F4F4F4' }"
            >
              <el-table-column prop="summaryId" label="日期">
                <template slot-scope="scope">
                  <div>{{ scope.row.startTime.slice(0, 10) }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="nickname" label="平台手续费（元）">
                <template slot-scope="scope">
                  <div style="color: blue; font-size: 18px">
                    + {{ scope.row.blueAmount }}
                  </div>
                  <div>{{ scope.row.blueCount }} 笔</div>
                </template>
              </el-table-column>
              <el-table-column prop="username" label="提现金额（元）">
                <template slot-scope="scope">
                  <div style="color: red; font-size: 18px">
                    {{ scope.row.redAmount == 0 ? '- 0' : scope.row.redAmount }}
                  </div>
                  <div>{{ scope.row.redCount }} 笔</div>
                </template>
              </el-table-column>
              <el-table-column label="账户余额（元）">
                <template slot-scope="scope">
                  <div><span>期初</span><span>1020.00</span></div>
                  <div><span>期末</span><span>430.00</span></div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="small"
                    type="primary"
                    @click="jumpWithdrawsList(scope.row)"
                    >明细</el-button
                  >
                </template>
              </el-table-column>
              <template
                v-if="!isShow"
                slot="empty"
                style="height: 200px; line-height: 200px"
              >
                <el-empty :image-size="200"></el-empty>
              </template>
            </el-table>
          </div>

          <Pagination
            v-if="isShow"
            @fatherSize="fatherSize"
            @fatherCurrent="fatherCurrent"
            :size="pagination.size"
            :total-elements="pagination.total"
            class="paging"
          ></Pagination>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Daily from './daily'

export default Daily
</script>
