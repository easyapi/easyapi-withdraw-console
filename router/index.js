const routers = [
  {
    title: '快速提现',
    children: [
      {
        title: '概要统计',
        path: '/withdraws/summary',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '提现列表',
        path: '/list',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '提现汇总',
        path: '/summary/daily',
        icon: 'el-icon-s-help',
        children: []
      }
    ]
  },
  {
    title: '快速提现',
    children: [
      {
        title: '支付宝设置',
        path: '/alipay',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '微信设置',
        path: '/wechatpay',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '银行卡设置',
        path: '/bankCardPay',
        icon: 'el-icon-s-help',
        children: []
      },
      {
        title: '参数设置',
        path: '/setting',
        icon: 'el-icon-s-help',
        children: []
      }
    ]
  }
]
export default routers
