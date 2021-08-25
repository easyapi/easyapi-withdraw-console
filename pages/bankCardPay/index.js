import './index.scss'
import Header from '../../components/Header'
import Aside from '../../components/Aside'

export default {
  name: 'index',
  components: {
    Header,
    Aside
  },
  head() {
    return {
      title: '银行卡设置 - EasyAPI快速提现'
    }
  },
  data() {
    return {
      showHeader: '',
      form: {
        banCardPay: true,
        radio: 'automaticWithdrawal',
        facilitator: ''
      },
      facilitatorArr: [
        {
          value: '微信支付',
          label: '微信支付'
        },
        {
          value: '支付宝',
          label: '支付宝'
        },
        {
          value: '云闪付',
          label: '云闪付'
        }
      ]
    }
  },
  mounted() {
    this.showHeader = this.theme.showHeader
  }
}
