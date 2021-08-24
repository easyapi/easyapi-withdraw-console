import './index.scss'
import Header from '../../../components/Header'
import Aside from '../../../components/Aside'
import MockTest from '../components/mockTest'


export default {
  name: 'index',
  components: {
    MockTest,
    Header,
    Aside
  },
  head() {
    return {
      title: '参数设置 - EasyAPI发票管理'
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
  methods: {
    showMockTest() {
      this.$refs.child.dialogVisible = true
    }
  },
  mounted() {
    this.showHeader = this.theme.showHeader
  }
}
