import './index.scss'
import Header from '../../../components/Header'
import Aside from '../../../components/Aside'

export default {
  name: 'index',
  components: {
    Header,
    Aside
  },
  head() {
    return {
      title: '支付宝设置 - EasyAPI发票管理'
    }
  },
  data() {
    return {
      showHeader: '',
      form: {
        alipay: true,
        radio: 'automaticWithdrawal',
        alipayVersion: '',
        withoutCode: ''
      },
      alipayVersionArr: [
        {
          value: 'mapi',
          label: 'mapi'
        }
      ],
      withoutCodeArr: [
        {
          value: '1',
          label: '是'
        },
        {
          value: '0',
          label: '否'
        }
      ]
    }
  },
  mounted() {
    this.showHeader = this.theme.showHeader
  }
}
