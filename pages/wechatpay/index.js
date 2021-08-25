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
      title: '微信设置 - EasyAPI快速提现'
    }
  },
  data() {
    return {
      showHeader: '',
      form: {
        wechatpay: true,
        radio: 'automaticWithdrawal'
      }
    }
  },
  mounted() {
    this.showHeader = this.theme.showHeader
  }
}