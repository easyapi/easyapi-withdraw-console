<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class='main-title'>
          <div class='main-title_top'>
            <b>概要统计</b>
          </div>
        </div>
        <div class='mg-tp-20'>
          <div class='summary-top'>
            <div class='summary-top-item'>
              <div class='item'>
                <p class='item-col1'>提现申请</p>
              </div>
              <div class='item-flex'>
                <el-badge :value='12'>
                  <el-button size='small' circle>未处理</el-button>
                </el-badge>
                <el-button size='small' circle>已处理</el-button>
              </div>
            </div>
            <div class='summary-top-item'>
              <div class='item'>
                <p class='item-col2'>提现金额</p>
              </div>
              <div class='item-flex'>
                <div>
                  <p>今日提现金额：</p>
                  <span class='amount'>1000.00</span>
                  <span>元</span>
                  <p class='details'>收支明细</p>
                </div>
                <div>
                  <p>总提现金额：</p>
                  <span class='amount'>10000.00</span>
                  <span>元</span>
                  <p class='details'>日汇总</p>
                </div>
              </div>
            </div>
            <div class='summary-top-item'>
              <div class='item'>
                <p class='item-col3'>提现笔数</p>
              </div>
              <div class='item-flex'>
                <div>
                  <p>今日提现笔数：</p>
                  <span class='amount'>1</span>
                  <span>笔</span>
                </div>
                <div>
                  <p>总提现笔数：</p>
                  <span class='amount'>10</span>
                  <span>笔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='main-content mg-tp-20'>
          <div id='RecentlyChart' class='chart'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './index'

export default Index
</script>
