const routers = [
  {
    title: '快速提现',
    children: [
      {
        title: '提现列表',
        path: '/withdraws/list',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '提现汇总',
        path: '/withdraws/summary/daily',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '支付宝设置',
        path: '/withdraws/alipay',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '微信设置',
        path: '/withdraws/wechatpay',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '银行卡设置',
        path: '/withdraws/bankCardPay',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '参数设置',
        path: '/withdraws/setting',
        icon: 'el-icon-s-help',
        children: []
      }
    ]
  }
]
export default routers
