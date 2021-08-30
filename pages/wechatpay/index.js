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
      showSidebar: '',
      form: {
        wechatpay: true,
        radio: 'automaticWithdrawal'
      }
    }
  },
  mounted() {
    if (this.$store.state.settings.showHeader == 'true') {
      this.showHeader = true
    } else {
      this.showHeader = false
    }
    if (this.$store.state.settings.showSidebar == 'true') {
      this.showSidebar = true
    } else {
      this.showSidebar = false
    }
  }
}
